/* eslint-disable no-undef */
import { signInButtons } from "../variabeles/homeVariables.cy";
import {
  userNameInput,
  passwordInput,
  signInButton,
} from "../variabeles/login.Variables.cy";
import {
  profilePage,
  userFirstName,
  icon,
  signOut,
  titleProfilePage,
  userName,
  editBtn,
  firstTransaction,
  secondTransaction,
  thirdTransaction,
  editUserInfoTitle,
  FirstNameInput,
  LastNameInput,
  saveBtn,
  cancelBtn,
} from "../variabeles/profileVariables.cy.js";

beforeEach(() => {
  cy.visit("http://localhost:5173");
  cy.get(signInButtons).click();
  cy.url().should("include", "/login");
  cy.get(userNameInput).type("tony@stark.com");
  cy.get(passwordInput).type("password123");
  cy.get(signInButton).click();
  cy.url().should("include", "/profile");
});
describe("profile Page  ", () => {
  it("should verify visibility of profile page elements", () => {
    cy.get(profilePage).should("be.visible");
    cy.get(userFirstName).should("be.visible");
    cy.get(icon).should("be.visible");
    cy.get(signOut).should("be.visible");
    cy.get(titleProfilePage)
      .should("be.visible")
      .and("contain", "Welcome back");
    cy.get(userName).should("be.visible");
    cy.get(editBtn).should("be.visible");
    cy.get(firstTransaction).should("be.visible");
    cy.get(secondTransaction).should("be.visible");
    cy.get(thirdTransaction).should("be.visible");
  });
});
/**
 * "Edit User Information
 */
describe("Edit User Information", () => {
  it("should allow user to click edit, then cancel", () => {
    cy.get(editBtn).click();
    cy.get(editUserInfoTitle).should("be.visible");
    cy.get(FirstNameInput).should("be.visible");
    cy.get(LastNameInput).should("be.visible");
    cy.get(saveBtn).should("be.visible");
    cy.get(cancelBtn).should("be.visible");
    cy.get(cancelBtn).click();
    cy.get(titleProfilePage).should("be.visible");
  });
  it("should allow user to change name and save", () => {
    cy.get(editBtn).click();
    cy.get(FirstNameInput).clear().type("selma");
    cy.get(LastNameInput).clear().type("kareem");
    cy.get(saveBtn).click();
    cy.get(userFirstName).should("be.visible");
    cy.get(userFirstName).should("contain", "selma");
  });
});

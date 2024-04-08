/* eslint-disable no-undef */
import {
    profilePage,
    userFirstName,
    icon,
    signOut,
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

export const updateUsername = (FirstName, LastName) => {
  cy.url().should("include", "/profile");
  cy.get(profilePage).should("be.visible");
  cy.get(userFirstName).should("be.visible");
  cy.get(icon).should("be.visible");
  cy.get(signOut).should("be.visible");
  cy.get(editBtn).click();
  cy.get(editUserInfoTitle).should("be.visible");
  cy.get(FirstNameInput).should("be.visible");
  cy.get(LastNameInput).should("be.visible");
  cy.get(saveBtn).should("be.visible");
  cy.get(cancelBtn).should("be.visible");
  cy.get(FirstNameInput).clear().type(FirstName);
  cy.get(LastNameInput).clear().type(LastName);
  cy.get(saveBtn).click();
  cy.get(userFirstName).should("be.visible");
  cy.get(userFirstName).should("contain", FirstName);
  cy.get(userName).should("be.visible");
  cy.get(firstTransaction).should("be.visible");
  cy.get(secondTransaction).should("be.visible");
  cy.get(thirdTransaction).should("be.visible");
};

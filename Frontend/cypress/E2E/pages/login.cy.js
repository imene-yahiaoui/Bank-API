/* eslint-disable no-undef */
import { signInButtons } from "../variabeles/homeVariables.cy";
import {
  signInPage,
  icon,
  signInTitle,
  form,
  userNameLabel,
  userNameInput,
  passwordLabel,
  passwordInput,
  signInButton,
  toastify,
} from "../variabeles/login.Variables.cy";

beforeEach(() => {
  cy.visit("http://localhost:5173");
  cy.get(signInButtons).click();
  cy.url().should("include", "/login");
});
describe("signIn Page  ", () => {
  it(" signIn Page  should be visible", () => {
    cy.get(signInPage).should("be.visible");
  });
  it(" icon  should be visible", () => {
    cy.get(icon).should("be.visible");
  });
  it(" signIn Title  should be visible", () => {
    cy.get(signInTitle).should("be.visible");
  });
  it(" form should be visible", () => {
    cy.get(form).should("be.visible");
  });
  it(" userNameLabel should be visible", () => {
    cy.get(userNameLabel).should("be.visible");
  });
  it(" userNameInput should be visible", () => {
    cy.get(userNameInput).should("be.visible");
  });
  it(" passwordLabel should be visible", () => {
    cy.get(passwordLabel).should("be.visible");
  });
  it(" passwordInput should be visible", () => {
    cy.get(passwordInput).should("be.visible");
  });
  it(" signInButton should be visible", () => {
    cy.get(signInButton).should("be.visible");
  });
});

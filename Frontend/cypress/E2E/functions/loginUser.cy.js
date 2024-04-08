/* eslint-disable no-undef */

import { userNameInput, passwordInput,signInButton } from "../variabeles/login.Variables.cy";


export const loginUser = (email, password) => {
  cy.url().should("include", "/login");
  cy.get(userNameInput).type(email);
  cy.get(passwordInput).type(password);
  cy.get(signInButton).click();
};

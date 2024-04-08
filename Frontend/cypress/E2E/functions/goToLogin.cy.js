/* eslint-disable no-undef */
import { signInButtons } from "../variabeles/homeVariables.cy";

export const goToLogin = () => {
  
  cy.get(signInButtons).click();
  cy.url().should("include", "/login");
};

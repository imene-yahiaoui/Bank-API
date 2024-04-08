

/* eslint-disable no-undef */
import {  signOut}from "../variabeles/profileVariables.cy.js";
import { signInButtons } from "../variabeles/homeVariables.cy";
  
  
  export const logout = () => {
    cy.get(signOut).should("be.visible");
    cy.get(signOut).click();
    cy.get(signInButtons).should("be.visible");
  };
  
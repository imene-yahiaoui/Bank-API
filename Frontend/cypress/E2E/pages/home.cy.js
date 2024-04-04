/* eslint-disable no-undef */
import {
  Logo,
  NaveBare,
  signInButtons,
  picturesHomePgae,
  heroSection,
} from "../variabeles/homeVariables.cy";

beforeEach(() => {
  cy.visit("http://localhost:5173");
});
/**
 * logo
 */
describe("logo  ", () => {
  it("logo should be visible", () => {
    cy.get(Logo).should("be.visible");
  });

  it("click should navigate to home page", () => {
    cy.get(Logo).click();
    cy.url().should("include", "/");
  });
});
/**
 * Home page
 */
describe("Home page", () => {
  it("pictures should be visible", () => {
    cy.get(picturesHomePgae).should("be.visible");
  });

  it("hero Section should be visible", () => {
    cy.get(heroSection).should("be.visible");
  });
});
/**
 * home page  visible in dimensions
 */

describe("Home page dimensions", () => {
  it("should be visible in dimensions 1024x780", () => {
    cy.viewport(1024, 780);
    cy.get(".App").should("be.visible");
  });
  it("should be visible in dimensions 300x780", () => {
    cy.viewport(300, 780);
    cy.get(".App").should("be.visible");
  });
});
/**
 * navbar
 */
describe(" navbar", () => {
  it("navbar should be visible", () => {
    cy.get(NaveBare).should("be.visible");
  });

  it("sign-in button should be visible", () => {
    cy.get(signInButtons).should("be.visible");
  });
  it("clicking sign-in button should navigate to login page", () => {
    cy.get(signInButtons).click();
    cy.url().should("include", "/login");
  });
  it("clicking logo should navigate back to home page", () => {
    cy.get(Logo).click();
    cy.url().should("include", "/");
  });
});

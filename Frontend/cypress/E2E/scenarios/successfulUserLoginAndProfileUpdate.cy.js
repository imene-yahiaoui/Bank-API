/* eslint-disable no-undef */
import { goToLogin } from "../functions/goToLogin.cy";
import { loginUser } from "../functions/loginUser.cy";
import { updateUsername } from "../functions/updateUsername.cy";
import { logout } from "../functions/logout.cy";

beforeEach(() => {
  cy.visit("http://localhost:5173");
});

it("successful User Login And Profile Update", () => {
  goToLogin();

  loginUser("steve@rogers.com", "password456");

  updateUsername("imene", "yahiaoui");

  logout();
});

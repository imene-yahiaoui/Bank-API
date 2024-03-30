import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import LoginForm from "./index.tsx";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import DisplayMessage from "../../components/displayMessage";
// import { loginAPI  } from "../../helpers/services/api";
const LoginFromRender = (
  <Provider store={store}>
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  </Provider>
);

test("Username and Password Be In The Document", () => {
  render(LoginFromRender);
  expect(screen.getByTestId("Username")).toHaveTextContent("Username");
  expect(screen.getByTestId("Password")).toHaveTextContent("Password");
  expect(screen.getByText("Remember me")).toBeInTheDocument();
  expect(screen.getByTestId("UsernameInput")).toHaveValue("");
  expect(screen.getByTestId("PasswordInput")).toHaveValue("");
});

test("add email", () => {
  render(LoginFromRender);
  const emailValue = screen.getByTestId("UsernameInput");
  const newEmail = "newtest@example.com";
  fireEvent.change(emailValue, { target: { value: newEmail } });
  expect(emailValue).toHaveValue(newEmail);
});
test("add password", () => {
  render(LoginFromRender);
  const PasswordValue = screen.getByTestId("PasswordInput");
  const newPassword = "1234";
  fireEvent.change(PasswordValue, { target: { value: newPassword } });
  expect(PasswordValue).toHaveValue(newPassword);
});
/**
 * mock displayMessage
 */
jest.mock("../../components/displayMessage", () => ({
  __esModule: true,
  default: jest.fn(),
}));
test("LoginForm should display an error message when email and password are empty", () => {
  render(
    <Provider store={store}>
      <LoginForm />
    </Provider>,
    { wrapper: BrowserRouter }
  );
  const emailValue = screen.getByTestId("UsernameInput");
  const newEmail = "";
  fireEvent.change(emailValue, { target: { value: newEmail } });
  expect(emailValue).toBeEmpty();
  const PasswordValue = screen.getByTestId("PasswordInput");

  const newPassword = "";
  fireEvent.change(PasswordValue, { target: { value: newPassword } });
  expect(PasswordValue).toBeEmpty();

  const submit = screen.getByRole("button", { name: "Sign In" });
  expect(submit).toBeInTheDocument();

  fireEvent.click(submit);
  expect(window.location.pathname).toBe("/");
  expect(DisplayMessage).toHaveBeenCalledWith(
    "Error:Email and password cannot be empty",
    "linear-gradient(to right, #ff0000, #ff4500)"
  );
});

test("LoginForm should display an error message when email and password are rong", () => {
  render(LoginFromRender);
  const emailValue = screen.getByTestId("UsernameInput");
  const newEmail = "tony@stark.com";
  fireEvent.change(emailValue, { target: { value: newEmail } });
  const PasswordValue = screen.getByTestId("PasswordInput");
  const newPassword = "password456";
  fireEvent.change(PasswordValue, { target: { value: newPassword } });
  const submit = screen.getByRole("button", { name: "Sign In" });
  expect(submit).toBeInTheDocument();
  fireEvent.click(submit);
  expect(DisplayMessage).toHaveBeenCalledWith(
    "Server unavailable. Please try again later",
    "linear-gradient(to right, #00b09b, #96c93d)"
  );
});

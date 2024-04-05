import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import LoginForm from "./index.tsx";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import DisplayMessage from "../../components/displayMessage";
import { loginAPI } from "../../helpers/services/api";
import fetchMock from "jest-fetch-mock";
import { act, waitFor } from "@testing-library/react";
const LoginFromRender = (
  <Provider store={store}>
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  </Provider>
);
describe("Login Form Rendering", () => {
  test("Username and Password Be In The Document", () => {
    render(LoginFromRender);
    expect(screen.getByTestId("Username")).toHaveTextContent("Username");
    expect(screen.getByTestId("Password")).toHaveTextContent("Password");
    expect(screen.getByText("Remember me")).toBeInTheDocument();
    expect(screen.getByTestId("UsernameInput")).toHaveValue("");
    expect(screen.getByTestId("PasswordInput")).toHaveValue("");
  });

  test("Should add email", () => {
    render(LoginFromRender);
    const emailValue = screen.getByTestId("UsernameInput");
    const newEmail = "newtest@example.com";
    fireEvent.change(emailValue, { target: { value: newEmail } });
    expect(emailValue).toHaveValue(newEmail);
  });
  test("Should add password", () => {
    render(LoginFromRender);
    const PasswordValue = screen.getByTestId("PasswordInput");
    const newPassword = "1234";
    fireEvent.change(PasswordValue, { target: { value: newPassword } });
    expect(PasswordValue).toHaveValue(newPassword);
  });
});
/**
 * mock displayMessage
 */
jest.mock("../../components/displayMessage", () => ({
  __esModule: true,
  default: jest.fn(),
}));
describe("Login Form Error Handling", () => {
  test("Should display an error message when email and password are empty", () => {
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
    //ici normalemet e rest sur /login pas /
    expect(window.location.pathname).toBe("/");
    expect(DisplayMessage).toHaveBeenCalledWith(
      "Error:Email and password cannot be empty",
      "linear-gradient(to right, #ff0000, #ff4500)"
    );
  });
});

describe("loginAPI function", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  ////////////////test d’intégration WITH Mocks
  it("should call loginAPI with correct parameters with mocks", async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const mockResponse = {
      status: 200,
      body: {
        token: "token",
      },
    };
    console.log = jest.fn();
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const { status } = await loginAPI("tony@stark.com", "password123");

    if (status === 200) {
      expect(status).toEqual(mockResponse.status);
    } else if (!status) {
      expect(console.log).toHaveBeenCalledWith(
        expect.any(Error),
        "error in the backend"
      );
      expect(DisplayMessage).toHaveBeenCalledWith(
        "Server unavailable. Please try again later",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    } else {
      expect(DisplayMessage).toHaveBeenCalledWith(
        "Error in username or password",
        "linear-gradient(to right, #ff0000, #ff4500)"
      );
    }
  });

  ////////////////test d’intégration WITHOUT Mocks

  it("should call loginAPI with correct parameters without mocks", async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const emailValue = screen.getByTestId("UsernameInput");
    const PasswordValue = screen.getByTestId("PasswordInput");
    const submit = screen.getByRole("button", { name: "Sign In" });

    fireEvent.change(emailValue, { target: { value: "tony@stark.com" } });
    fireEvent.change(PasswordValue, { target: { value: "password123" } });

    await act(async () => {
      fireEvent.click(submit);
    });
    const { status } = await loginAPI("tony@stark.com", "password123");
    await waitFor(() => {
      if (status === 200) {
        expect(document.location.pathname).toBe("/profile");
      } else if (!status) {
        expect(DisplayMessage).toHaveBeenCalledWith(
          "Server unavailable. Please try again later",
          "linear-gradient(to right, #00b09b, #96c93d)"
        );
      }
    });
  });

  it("should call loginAPI with empty parameters without mocks", async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const emailValue = screen.getByTestId("UsernameInput");
    const PasswordValue = screen.getByTestId("PasswordInput");
    const submit = screen.getByRole("button", { name: "Sign In" });

    fireEvent.change(emailValue, { target: { value: "" } });
    fireEvent.change(PasswordValue, { target: { value: "" } });

    await act(async () => {
      fireEvent.click(submit);
    });
    const { status } = await loginAPI("", "");
    await waitFor(() => {
      if (status === 400) {
        expect(DisplayMessage).toHaveBeenCalledWith(
          "Error:Email and password cannot be empty",
          "linear-gradient(to right, #ff0000, #ff4500)"
        );
      } else if (!status) {
        expect(DisplayMessage).toHaveBeenCalledWith(
          "Server unavailable. Please try again later",
          "linear-gradient(to right, #00b09b, #96c93d)"
        );
      }
    });
  });
  it("should call loginAPI with  wrong parameters without mocks", async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const emailValue = screen.getByTestId("UsernameInput");
    const PasswordValue = screen.getByTestId("PasswordInput");
    const submit = screen.getByRole("button", { name: "Sign In" });

    fireEvent.change(emailValue, { target: { value: "test" } });
    fireEvent.change(PasswordValue, { target: { value: "1234567890" } });

    await act(async () => {
      fireEvent.click(submit);
    });
    const { status } = await loginAPI("test", "1234567890");
    await waitFor(() => {
      if (status === 400) {
        expect(DisplayMessage).toHaveBeenCalledWith(
          "Error in username or password",
          "linear-gradient(to right, #ff0000, #ff4500)"
        );
      } else if (!status) {
        expect(DisplayMessage).toHaveBeenCalledWith(
          "Server unavailable. Please try again later",
          "linear-gradient(to right, #00b09b, #96c93d)"
        );
      }
    });
  });
});

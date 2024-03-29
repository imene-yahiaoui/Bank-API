import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import SignIn from "./index.tsx";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { login } from "../../helpers/features/userSlice";

const renderSignIn = (
  <Provider store={store}>
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>
  </Provider>
);

describe("login statement and navigation", () => {
  test("renders login btn with correct text", () => {
    render(renderSignIn);
    expect(screen.getByTestId("login")).toHaveTextContent("Sign In");
  });
  test("submit login btn ", () => {
    render(
      <Provider store={store}>
        <SignIn />{" "}
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const Login = screen.getByTestId("login");
    fireEvent.click(Login);
    expect(window.location.pathname).toBe("/login");
  });
});

describe("logout statement and navigation", () => {
  test("renders logout btn with correct text", () => {
    const userDetails = { email: "jhone", password: "deby" };

    store.dispatch(
      login({
        user: userDetails,
      })
    );
    render(renderSignIn);

    expect(screen.getByTestId("logout")).toHaveTextContent("Sign out");
  });
  test("submit logout btn ", () => {
    const userDetails = { email: "jhone", password: "deby" };

    store.dispatch(
      login({
        user: userDetails,
      })
    );
    render(
      <Provider store={store}>
        <SignIn />{" "}
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const Logout = screen.getByTestId("logout");
    fireEvent.click(Logout);
    expect(window.location.pathname).toBe("/");
  });
});

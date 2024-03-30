import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";

test("render Login", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );
  expect(
    screen.getByText("More savings means higher rates")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Open a savings account with Argent Bank today!")
  ).toBeInTheDocument();
  expect(window.location.pathname).toBe("/");
});

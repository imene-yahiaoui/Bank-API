import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";

test("render Login", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId("loginTitle")).toBeInTheDocument();
});

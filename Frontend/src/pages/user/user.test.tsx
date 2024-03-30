import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import User from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";

test("render Login", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <User />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText("Argent Bank Savings (x6712)")).toBeInTheDocument();
  expect(screen.getByText("Argent Bank Credit Card (x8349)")).toBeInTheDocument();
});

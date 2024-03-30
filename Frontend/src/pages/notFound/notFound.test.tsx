import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NotFound from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";

test("render NotFound", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByText("Oups! La page que")).toBeInTheDocument();
  expect(
    screen.getByText("Retourner sur la page d'accueil")
  ).toBeInTheDocument();
});

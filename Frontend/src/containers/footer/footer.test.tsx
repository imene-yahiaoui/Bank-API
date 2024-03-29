import Footer from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";

test("footer BeInTheDocument", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId("footer")).toBeInTheDocument();

  expect(screen.getByTestId("footer")).toHaveTextContent(
    "Copyright 2020 Argent Bank"
  );
});

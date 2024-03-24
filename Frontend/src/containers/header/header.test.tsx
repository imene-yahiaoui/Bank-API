import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import Header from "./index.tsx";
import { MemoryRouter } from "react-router-dom";

test("renders header with correct text", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByTestId("title")).toHaveTextContent("Argent Bank");
});

test("logo Be In The Document", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
  expect(screen.getByTestId("photo")).toBeInTheDocument();
});

import UserName from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";
const renderUserName = (
  <Provider store={store}>
    <MemoryRouter>
      <UserName />
    </MemoryRouter>
  </Provider>
);

test("renders EditUser vwith correct title", () => {
  render(renderUserName);
  expect(screen.getByTestId("submitEditName")).toBeInTheDocument();
  expect(screen.getByText("Welcome back")).toBeInTheDocument();
});

test("checks for the presence of userName In The Document ", () => {
  render(renderUserName);
  const editButton = screen.getByText("Edit Name");
  editButton.click();
  expect(screen.getByTestId("userName")).toBeInTheDocument();
});

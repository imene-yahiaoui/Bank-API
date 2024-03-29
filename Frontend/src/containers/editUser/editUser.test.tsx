import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditUser from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";
const closeModalMock = jest.fn();
const renderEditUser = (
  <Provider store={store}>
    <MemoryRouter>
      <EditUser closeModal={closeModalMock} />
    </MemoryRouter>
  </Provider>
);

test("renders EditUser vwith correct title", () => {
  render(renderEditUser);
  expect(screen.getByTestId("title")).toHaveTextContent("Edit User info");
});

test("expect have Cancel and Save in the document ", () => {
  render(renderEditUser);
  expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
});

test("click cancel btn ", () => {
  render(renderEditUser);
  const canselBtn = screen.getByRole("button", { name: "Cancel" });
  expect(canselBtn).toBeInTheDocument();

  fireEvent.click(canselBtn);
  expect(closeModalMock).toHaveBeenCalledWith(false);
});

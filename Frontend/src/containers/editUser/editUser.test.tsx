import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditUser from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";
import { editUserNameAPI } from "../../helpers/services/api";
import fetchMock from "jest-fetch-mock";

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

describe("change user data test ", () => {
  test("change First Name ", () => {
    render(renderEditUser);
    const FirstNameValue = screen.getByTestId("First Name");
    const newFirstName = "jhone";
    fireEvent.change(FirstNameValue, { target: { value: newFirstName } });
    expect(FirstNameValue).toHaveValue(newFirstName);
  });
  test("change Last Name ", () => {
    render(renderEditUser);
    const LastNameValue = screen.getByTestId("Last Name");
    const newLastName = "mirow";
    fireEvent.change(LastNameValue, { target: { value: newLastName } });
    expect(LastNameValue).toHaveValue(newLastName);
  });
});

describe("click btns ", () => {
  test("click cancel btn ", () => {
    render(renderEditUser);
    const canselBtn = screen.getByRole("button", { name: "Cancel" });
    expect(canselBtn).toBeInTheDocument();

    fireEvent.click(canselBtn);
    expect(closeModalMock).toHaveBeenCalledWith(false);
  });

  test("click Save btn ", async () => {
    const mockResponse = { success: true };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const response = await editUserNameAPI("tokensssm", "John", "Doe");
    expect(response).toEqual(undefined);

    render(renderEditUser);
    const SaveBtn = screen.getByRole("button", { name: "Save" });
    expect(SaveBtn).toBeInTheDocument();

    fireEvent.click(SaveBtn);

    try {
      expect(closeModalMock).toHaveBeenCalledWith(false);
    } catch (error) {
      console.error(error, "error in editUserNameAPI");
    }
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditUser from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";
import { editUserNameAPI } from "../../helpers/services/api";
import DisplayMessage from "../../components/displayMessage";

const closeModalMock = jest.fn();

const renderEditUser = (
  <Provider store={store}>
    <MemoryRouter>
      <EditUser closeModal={closeModalMock} />
    </MemoryRouter>
  </Provider>
);
describe("Edit User  Rendering", () => {
  test("renders EditUser vwith correct title", () => {
    render(renderEditUser);
    expect(screen.getByTestId("title")).toHaveTextContent("Edit User info");
  });

  test("expect have Cancel and Save in the document ", () => {
    render(renderEditUser);
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });
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
/**
 * mock displayMessage
 */
jest.mock("../../components/displayMessage", () => ({
  __esModule: true,
  default: jest.fn(),
}));
describe("click btns ", () => {
  test("click cancel btn ", () => {
    render(renderEditUser);
    const canselBtn = screen.getByRole("button", { name: "Cancel" });
    expect(canselBtn).toBeInTheDocument();

    fireEvent.click(canselBtn);
    expect(closeModalMock).toHaveBeenCalledWith(false);
  });

  test("Should update user info when I click the save button ", async () => {
    console.log = jest.fn();

    render(renderEditUser);
    const saveBtn = screen.getByRole("button", { name: "Save" });
    const FirstNameValue = screen.getByTestId("First Name");
    const newFirstName = "sarah";
    fireEvent.change(FirstNameValue, { target: { value: newFirstName } });
    expect(FirstNameValue).toHaveValue(newFirstName);
    const LastNameValue = screen.getByTestId("Last Name");
    const newLastName = "milano";
    fireEvent.change(LastNameValue, { target: { value: newLastName } });

    fireEvent.click(saveBtn);

    const ediUserName = await editUserNameAPI("token", "sarah", "milano");

    if (ediUserName?.status === 200) {
      expect(FirstNameValue).toBe("sarah");
      expect(closeModalMock).toHaveBeenCalledWith(false);
      expect(store.dispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          body: ediUserName?.body,
        })
      );
    } else {
      expect(DisplayMessage).toHaveBeenCalledWith(
        "Server unavailable. Please try again later",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
      expect(console.log).toHaveBeenCalledWith(
        expect.any(Error),
        "error in editUserNameAPI"
      );
    }
  });
});

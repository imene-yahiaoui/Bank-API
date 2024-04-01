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
      <EditUser closeModal={closeModalMock}  />
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
  // test("click Save btn ", () => {
  //   ediUserName.mockResolvedValue({ status: 200 });
   
  //   const userDetails = {
  //     email: "tony@stark.com",
  //     firstName: "tomi",
  //     lastName: "mariat",
  //     userName: "stark",
  //     createdAt: "2023-01-26T15:06:17.564Z",
  //     updatedAt: "2024-03-29T15:54:45.254Z",
  //     id: "63d296e968a4a72520939ede",
  //   };
  //   store.dispatch(
  //     body({
  //       body: userDetails,
  //     })
  //   );

  //   render(renderEditUser);
  //   const SaveBtn = screen.getByRole("button", { name: "Save" });
  //   expect(SaveBtn).toBeInTheDocument();

  //   fireEvent.click(SaveBtn);
  //   expect(closeModalMock).toHaveBeenCalledWith(false);
  // });

  
 
});
 

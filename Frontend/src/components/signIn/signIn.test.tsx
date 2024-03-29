import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import SignIn from "./index.tsx";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../helpers/features/userSlice";
 

const renderSignIn = (
  <Provider store={store}>
    <MemoryRouter>
      <SignIn />
    </MemoryRouter>
  </Provider>
);

describe("login and logout statement", () => {
  test("renders login btn with correct text", () => {
    render(renderSignIn);
    expect(screen.getByTestId("login")).toHaveTextContent("Sign In");
  });
  test("renders logout btn with correct text", () => {
    const dispatch = useDispatch();
    const userDetails = { email: "jhone", password: "deby" };
  
    dispatch(
      login({
        user: userDetails ,
      })
    );
    render(renderSignIn);

    expect(screen.getByTestId("logout")).toHaveTextContent("Sign out");
  });
});

describe("login and logout navigation", () => {
  test("submit login btn ", () => {
    render(
      <Provider store={store}>
        <SignIn />{" "}
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const Login = screen.getByTestId("login");
    fireEvent.click(Login);
    expect(window.location.pathname).toBe("/login");
  });
  // test("submit logout btn ", () => {
  //   const user = useSelector(selectUser);
  //   const userDetails = { firstName: "jhone", lastname: "deby" };
  //   store.dispatch(user(userDetails));
  //   render(
  //     <Provider store={store}>
  //       <SignIn />{" "}
  //     </Provider>,
  //     { wrapper: BrowserRouter }
  //   );

  //   const Logout = screen.getByTestId("logout");
  //   fireEvent.click(Logout);
  //   expect(window.location.pathname).toBe("/");
  // });
});

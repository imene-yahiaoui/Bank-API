import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import LoginForm from "./index.tsx";
import { MemoryRouter } from "react-router-dom";

const LoginFromRender=  <Provider store={store}>
<MemoryRouter>
  <LoginForm />
</MemoryRouter>
</Provider>

test("Username and Password Be In The Document", () => {
  render(
    LoginFromRender
  );

  expect(screen.getByTestId("Username")).toHaveTextContent("Username");
  expect(screen.getByTestId("Password")).toHaveTextContent("Password");
});


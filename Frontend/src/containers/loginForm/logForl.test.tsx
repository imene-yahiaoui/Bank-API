/* eslint-disable no-undef */


import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../loginForm/index";

//test example
it("demo somme 2", function () {
  const b = 3 + 3;
  expect(b).toBe(6);
});

describe("LoginForm", () => {
  test("renders without errors", () => {
    render(<LoginForm />);
  });

  test("handles form submission", () => {
    render(<LoginForm />);

    // Mock user input
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password123" },
    });

    // Trigger form submission
    fireEvent.click(screen.getByText(/sign in/i));
  });
});

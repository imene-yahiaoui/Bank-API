import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import MyComponent from "./myComponenet.tsx";
import Header from "./index.tsx";
// Test du composant __test__
test("renders MyComponent with correct text", () => {
  render(<MyComponent />);
  expect(screen.getByTestId("my-component")).toHaveTextContent("Hello, World!");
  expect(screen.getByTestId("photo")).toBeInTheDocument();
});

// // Test du header
test("renders header with correct text", () => {
  render(<Header />);

  expect(screen.getByTestId("my-component")).toHaveTextContent("Argent Bank");
});

 
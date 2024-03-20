import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./index";

// Test du composant
test("renders MyComponent with correct text", () => {
  render(<Header />);

  // Vérifie si le composant est rendu avec le texte attendu
  expect(screen.getByTestId("my-component")).toHaveTextContent("Argent Bank");
});

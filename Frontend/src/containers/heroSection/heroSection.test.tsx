import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HeroSection from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";

const renderHeroSection = (
  <Provider store={store}>
    <MemoryRouter>
      <HeroSection />
    </MemoryRouter>
  </Provider>
);

test("HeroSection statement", () => {
  render(renderHeroSection);
  expect(screen.getByText("No fees.")).toBeInTheDocument();
  expect(screen.getByText("No minimum deposit.")).toBeInTheDocument();
  expect(screen.getByText("High interest rates.")).toBeInTheDocument();
  expect(
    screen.getByText("Open a savings account with Argent Bank today!")
  ).toBeInTheDocument();
});

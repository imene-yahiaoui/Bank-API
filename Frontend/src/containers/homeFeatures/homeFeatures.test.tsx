import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomeFeatures from "./index";
import { Provider } from "react-redux";
import { store } from "../../app/store.ts";
import { MemoryRouter } from "react-router-dom";

const renderHomeFeatures = (
  <Provider store={store}>
    <MemoryRouter>
      <HomeFeatures />
    </MemoryRouter>
  </Provider>
);

test("HomeFeatures statement", () => {
  render(renderHomeFeatures);
  expect(screen.getByText("Features")).toBeInTheDocument();
  expect(screen.getByText("You are our #1 priority")).toBeInTheDocument();
  expect(
    screen.getByText("More savings means higher rates")
  ).toBeInTheDocument();
  expect(screen.getByText("Security you can trust")).toBeInTheDocument();
});

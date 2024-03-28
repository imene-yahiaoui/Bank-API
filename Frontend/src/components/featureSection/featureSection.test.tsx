import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FeatureSection from "./index";

describe("FeatureSection component", () => {
  const mockProps = {
    img: "Photo.png",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our24/7  chat or through a phone call in less than 5 minutes",
  };

  test("renders title, img, and text correctly", () => {
    render(<FeatureSection {...mockProps} />);
    expect(screen.getByAltText("Chat Icon")).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toHaveTextContent(
      "You are our #1 priority"
    );
  });
});

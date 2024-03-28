import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Account from "./index";

describe("Account component", () => {
  const mockProps = {
    title: "Savings Account",
    amount: "$1900",
    description: "Your savings account balance",
  };

  test("renders title, amount, and description correctly", () => {
    render(<Account {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toHaveTextContent(
      "Savings Account"
    );
    expect(screen.getByText(mockProps.amount)).toBeInTheDocument();
    expect(screen.getByText(mockProps.amount)).toHaveTextContent("1900");

    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toHaveTextContent(
      "Your savings account balance"
    );
  });

  test('renders the "View transactions" button', () => {
    render(<Account {...mockProps} />);

    expect(
      screen.getByRole("button", { name: /view transactions/i })
    ).toBeInTheDocument();
  });

  test("button has correct text", () => {
    render(<Account {...mockProps} />);

    const button = screen.getByRole("button", { name: /view transactions/i });
    expect(button).toHaveTextContent("View transactions");
  });
});

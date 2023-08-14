import Home from "../src/app/page";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

describe("App", () => {
  it("renders the home page", () => {
    render(<Home />);

    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  describe("button", () => {
    it("navigates to the portfolio page when the button is clicked", async () => {
      render(<Home />);

      const button = screen.getByText("See my stuff");
      fireEvent.click(button);
      
      await waitFor(() => {
        expect(screen.getByTestId("portfolio")).toBeInTheDocument();
      });
    });
  });
});

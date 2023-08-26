import Contact from "@/src/app/contact/page";
import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

describe("Dashboard page rendering", () => {
  it("renders the dashboard page", () => {
    render(<Contact/>);

    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  // it("has text saying 'blah blah blah'", () => {
  //   render(<Dashboard/>);

  //   expect(screen.getByText("Blah blah blah blah.")).toBeInTheDocument();
  // });

  // it("has a 'see my stuff' button", () => {
  //   render(<Dashboard/>);

  //   const button = screen.getByRole("button", { name: "See my stuff" });

  //   expect(button).toBeInTheDocument();
  // });

  // describe("button", () => {
  //   it("navigates to the portfolio page when the button is clicked", async () => {
  //     render(<Home />);

  //     const button = screen.getByText("See my stuff");
  //     fireEvent.click(button);

  //     await waitFor(() => {
  //       expect(screen.getByTestId("portfolio")).toBeInTheDocument();
  //     });
  //   });
  // });
});

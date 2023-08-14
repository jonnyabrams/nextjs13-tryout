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
});

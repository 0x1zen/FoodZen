import { render, screen } from "@testing-library/react";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

describe("Contact Component Test Cases", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  afterEach(() => {
    console.log("after each");
  });
  test("Should load contact component", () => {
    render(<Contact />);
    // Rendering to the jsdom environment.
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});

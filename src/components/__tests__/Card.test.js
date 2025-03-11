import { render, screen } from "@testing-library/react";
import Card from "../Card.js";
import "@testing-library/jest-dom";
import cardMock from "../mocks/cardMock.json";

test("Should render a card with prop data", () => {
  render(<Card resData={cardMock} />);
  const name = screen.getByText("Shriji Namkeen");
  expect(name).toBeInTheDocument();
});

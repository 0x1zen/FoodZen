import { render, screen } from "@testing-library/react";
import Card from "../Card.js";
import "@testing-library/jest-dom";
import cardMock from "../mocks/cardMock.json";
import { withFlatDiscount } from "../Card.js";
import cardLabelMock from "../mocks/cardLabelMock.json";

const CardWithFlatDiscount = withFlatDiscount(Card);

test("Should render a card with prop data", () => {
  render(<Card resData={cardMock} />);
  const name = screen.getByText("Shriji Namkeen");
  expect(name).toBeInTheDocument();
});

test("Should load label on the card", () => {
  render(<CardWithFlatDiscount resData={cardLabelMock} />);
  const label = screen.getByText(/₹40/);
  expect(label).toBeInTheDocument();
});

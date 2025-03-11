import { sum } from "../sum.js";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(70, 5);
  // The below line is the assertion
  expect(result).toBe(75);
});

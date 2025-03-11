import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body.js";
import restaurantListResponse from "../mocks/restaurantListResponse.json";
import { act } from "react";
import UserContext from "../../utils/UserContext.js";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantListResponse);
    },
  });
});
test("Should Search Restaurant List For Pizza Input", async () => {
  await act(async () =>
    render(
      <UserContext.Provider
        value={{
          loggedInUser: "0x1zen",
          setUserName: () => {
            "0x1zen";
          },
        }}
      >
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      </UserContext.Provider>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

test("Should Return Cards Having Rating Greater Than 4.3 ", async () => {
  await act(async () => {
    return render(
      <UserContext.Provider
        value={{
          loggedInUser: "0x1zen",
          setUserName: () => {
            "0x1zen";
          },
        }}
      >
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      </UserContext.Provider>
    );
  });

  const topRatedRestaurants = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedRestaurants);
  const topRatedCards = screen.getAllByTestId("resCard");
  const filteredCards = topRatedCards.filter((card) => {
    const ratingElement = card.querySelector('[data-testid="test-rating"]');
    if (ratingElement) {
      const text = ratingElement.textContent.split("");
      // output = [ '4', '.', '4', ' ', '⭐' ]
      const rating = text[0] + text[1] + text[2];
      return rating >= 4.3;
    }
  });
  expect(filteredCards.length).toBeGreaterThan(2);
});

import { render,screen } from "@testing-library/react";
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
test("Should Load Body Component With Search", async () => {
  await act(async () =>
    render(
      <UserContext.Provider value={{ loggedInUser: "0x1zen", setUserName: () =>{"0x1zen"} }}>
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      </UserContext.Provider>,
    ),
  );
  const searchBtn = screen.getByRole("button",{name:"Search"});
  expect(searchBtn).toBeInTheDocument();
});

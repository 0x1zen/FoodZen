import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu.js";
import restaurantInfoMock from "../mocks/restaurantInfoMock.json";
import restaurantMenuMock from "../mocks/restaurantMenuMock.json";
import { act } from "react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(restaurantInfoMock);
        },
    });
});
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(restaurantMenuMock);
        },
    });
});

it("Should Load Restaurant Menu Component", async () => {
    await act(async () => render(<RestaurantMenu />));
});

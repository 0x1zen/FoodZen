import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu.js";
import restaurantMenuMock from "../mocks/restaurantMenuMock.json";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : ()=> {return  Promise.resolve(restaurantMenuMock);}
    });
})

describe("Add To Cart Test",()=>{
    it("Should Load Restaurant Menu Component",()=>{
        render(<RestaurantMenu/>)
    })
})
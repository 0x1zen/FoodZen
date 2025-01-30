import Card from "./Card.js";
import responseList from "../utils/mockData.js";
import Button from "./Button.js";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(responseList);
  return (
    <div className="body">
      <div className="search-bar-area">
        <input
          className="search-field"
          type="text"
          placeholder="Search A Dish"
        ></input>
        <Button btnName="Search" />
        <button
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfRestaurants.map((restaurant, index) => (
          <Card key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import Card from "./Card.js";
import Button from "./Button.js";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&page_type=DESKTOP_WEB_LISTING";
      const response = await fetch(url);
      const json = await response.json();
      const extractedData=json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurants(
        extractedData
      );
  };

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
              (res) => res.info.avgRating >= 4.4,
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

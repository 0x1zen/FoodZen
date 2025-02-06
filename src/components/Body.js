import Card from "./Card.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import { RESTAURANTS_API } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState(listOfRestaurants);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = RESTAURANTS_API;
    const response = await fetch(url);
    const json = await response.json();
    for (let i = 0; i < json.data.cards.length; i++) {
      const extractedData =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (extractedData && extractedData.length === 8) {
        setListOfRestaurants(extractedData);
        setFilteredRestaurant(extractedData);
        console.log(extractedData);
      }
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar-area">
        <input
          className="search-field"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="btn"
          onClick={() => {
            if (searchText === "") {
              setFilteredRestaurant(listOfRestaurants);
            } else {
              const searchedRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(searchedRestaurant);
            }
          }}
        >
          <span className="btn-name">Search</span>
        </button>
        <button
          className="btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.3,
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          <span className="btn-name">Top Rated Restaurants</span>
        </button>
      </div>
      <div className="resto-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id} className="router-link">
              <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

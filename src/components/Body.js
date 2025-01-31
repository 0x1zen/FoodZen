import Card from "./Card.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText,setSearchText]=useState("Pizza");

  console.log("body re-rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&page_type=DESKTOP_WEB_LISTING";
    const response = await fetch(url);
    const json = await response.json();
    let extractedData = null;
    for (let i = 3; i < json.data.cards.length; i++) {
      extractedData =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (extractedData && extractedData.length === 8) {
        setListOfRestaurants(extractedData);
        break;
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
          placeholder="Search" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        ></input>
        <button className="btn" onClick={()=>{
            const searchedRestaurant=listOfRestaurants.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        })
            if(searchText===""){
              fetchData();
            }
            else{
              setListOfRestaurants(searchedRestaurant);
            }
        }}>
          <span className="btn-name">Search</span>
        </button>
        <button
          className="btn"
          onClick={() => {
            // Filter Logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.4,
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          <span className="btn-name">Top Rated Restaurants</span>
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

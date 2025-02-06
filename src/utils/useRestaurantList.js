import { useState } from "react";
import {RESTAURANTS_API} from "../utils/constants.js";

const useRestaurantList = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = RESTAURANTS_API;
    const response = await fetch(url);
    const json = await response.json();
    for (let i = 0; i < json.data.cards.length; i++) {
      const restaurants =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants && restaurants.length === 8) {
        setRestaurantsData(restaurantsData);
      }
    }
  };
  return restaurantsData;
};
export default useRestaurantList;

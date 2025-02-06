import { useState,useEffect } from "react";
import {MENU_API} from "../utils/constants.js";
const useRestaurantInfo = (resId)=>{
  const [resInfo,setResInfo]=useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const response = await data.json();
    const card = response?.data?.cards[2]?.card?.card;
    setResInfo(card);
  };

  return resInfo;
}

export default useRestaurantInfo;
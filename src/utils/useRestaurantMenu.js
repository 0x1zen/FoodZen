import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const response = await data.json();
    const totalCards =
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
    for (let i = 0; i < totalCards.length; i++) {
      if (totalCards[i]?.card?.card?.itemCards) {
        const data = totalCards[i]?.card?.card?.itemCards;
        setMenuInfo(data);
        break;
      }
    }
  };
  return menuInfo;
};

export default useRestaurantMenu;

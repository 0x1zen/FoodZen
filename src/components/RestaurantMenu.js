import MenuCard from "./MenuCard.js";
import Shimmer from "./Shimmer.js";
import {MENU_API} from "../utils/constants";
import { useState, useEffect } from "react";
import {useParams} from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState([]);

  const {resId} = useParams();
  
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    );
    const response = await data.json();
    const card = response?.data?.cards[2]?.card?.card;
    setResInfo(card);
    const totalCards=response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    for(let i=0;i<totalCards.length;i++){
      if(totalCards[i]?.card?.card?.itemCards){
        setMenuInfo(totalCards[i]?.card?.card?.itemCards);
        break;
      }
    }
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines, avgRating, sla, areaName } =
    resInfo?.info;

  return (
    <div className="restaurant-details">
      <h1>{name}</h1>
      <div className="tag-line">
        <h2 className="tag-line-item">{avgRating} stars</h2>
        <h2 className="tag-line-item">{costForTwoMessage}</h2>
      </div>
      <div className="tag-line-info">
        <h2 className="res-menu-cuisine">{cuisines.join(",")}</h2>
        <h3 className="res-menu-info">Outlet {areaName}</h3>
        <h3 className="res-menu-info">
          {sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins
        </h3>
      </div>
      <h1>Menu Card</h1>
      {menuInfo.map((menuItem) => {
        return (
          <MenuCard
            key={menuItem?.card?.info?.id}
            name={menuItem?.card?.info?.name}
            price={menuItem?.card?.info?.price || menuItem?.card?.info?.defaultPrice}
            imgId={menuItem?.card?.info?.imageId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

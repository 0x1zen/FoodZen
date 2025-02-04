import MenuCard from "./MenuCard.js";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menuInfo, setMenuInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=830418&catalog_qa=undefined&submitAction=ENTER",
    );
    const response = await data.json();
    const card = response?.data?.cards[2].card.card;
    const itemCards =
      response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    setResInfo(card);
    setMenuInfo(itemCards);
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
            name={menuItem?.card?.info?.name}
            price={menuItem?.card?.info?.price}
            imgId={menuItem?.card?.info?.imageId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

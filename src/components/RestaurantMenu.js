import MenuCard from "./MenuCard.js";
import Shimmer from "./Shimmer.js";
import useRestaurantInfo from "../utils/useRestaurantInfo.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantInfo(resId);
  const menuInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines, avgRating, sla, areaName } =
    resInfo?.info;
  const { minDeliveryTime, maxDeliveryTime } = sla;

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
          {minDeliveryTime}-{maxDeliveryTime} mins
        </h3>
      </div>
      <h1>Menu Card</h1>
      {menuInfo.map((menuItem) => {
        return (
          <MenuCard
            key={menuItem?.card?.info?.id}
            name={menuItem?.card?.info?.name}
            price={
              menuItem?.card?.info?.price || menuItem?.card?.info?.defaultPrice
            }
            imgId={menuItem?.card?.info?.imageId}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

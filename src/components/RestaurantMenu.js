import MenuCard from "./MenuCard.js";
import Shimmer from "./Shimmer.js";
import useRestaurantInfo from "../utils/useRestaurantInfo.js";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, menuInfo] = useRestaurantInfo(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwoMessage, cuisines, avgRating, sla, areaName } =
    resInfo?.info;
  const { minDeliveryTime, maxDeliveryTime } = sla;

  return (
    <div className="p-6 mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-bold text-green-600">{avgRating} ⭐</h2>
        <h2 className="text-lg font-bold">{costForTwoMessage}</h2>
      </div>
      <div className="flex flex-col space-y-2 mb-6 text-gray-700">
        <h2 className="text-blue-500 text-xl">{cuisines.join(", ")}</h2>
        <h3>Outlet - {areaName}</h3>
        <h3>Delivery Time: {minDeliveryTime}-{maxDeliveryTime} mins</h3>
      </div>
      <h1 className="text-2xl font-bold mb-4">Restaurant Menu</h1>
      <div className="flex flex-col space-y-6">
        {menuInfo.map((menuItem) => {
          const { title, itemCards } = menuItem?.card?.card;
          return <MenuCard key={title} section={title} menuData={itemCards} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;

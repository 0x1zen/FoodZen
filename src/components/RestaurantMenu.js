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
    <div className="p-8 mx-auto">
      <h1 className="text-3xl font-bold mb-6">{name}</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-bold">{avgRating} ⭐</h2>
        <h2 className="text-lg font-bold">{costForTwoMessage}</h2>
      </div>
      <div className="flex flex-col space-y-4 mb-6">
        <h2 className="text-blue-500 text-xl">{cuisines.join(", ")}</h2>
        <h3 className="text-gray-600 text-lg">Outlet-{areaName}</h3>
        <h3 className="text-gray-600 text-lg">
          {minDeliveryTime}-{maxDeliveryTime} mins
        </h3>
      </div>
      <h1 className="text-2xl font-bold mb-6">Menu Card</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default RestaurantMenu;

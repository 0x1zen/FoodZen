import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, sla } = resData?.info;
  const cuisines = resData.info.cuisines;
  const cuisineString = cuisines.join(", ");
  const imgLink = CDN_URL;

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition min-h-130">
      <img
        className="w-full h-80 object-cover rounded-md"
        src={imgLink + resData.info.cloudinaryImageId}
        alt={name}
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <h4 className="text-gray-600">{cuisineString}</h4>
      <h4 className="text-yellow-500 font-medium">{avgRating} ⭐</h4>
      <h4 className="text-gray-700">{costForTwo}</h4>
      <h4 className="text-green-500">{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default Card;

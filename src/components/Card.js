import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, avgRating, costForTwo, sla } = resData?.info;
  const cuisines = resData.info.cuisines;
  const cuisineString = cuisines.join(", ");
  const imgLink = CDN_URL;
  return (
    <div className="resto-card">
      <img
        className="resto-img"
        src={imgLink + resData.info.cloudinaryImageId}
      ></img>
      <h3 className="resto-name">{name}</h3>
      <h4 className="cuisine-name">{cuisineString}</h4>
      <h4 className="star-rating">{avgRating} stars</h4>
      <h4 className="delivery-time">{costForTwo}</h4>
      <h4 className="delivery-time">{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default Card;
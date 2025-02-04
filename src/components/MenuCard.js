import { CDN_URL } from "../utils/constants";

const MenuCard = (props) => {
  const { name, price, imgId } = props;
  const imgLink = CDN_URL + imgId;
  return (
    <div className="menu-card">
      <div className="menu-item-name-tag">
        <h2>{name}</h2>
        <h3>₹{price/100}</h3>
      </div>
      <img className="menu-item-img" src={imgLink} />
    </div>
  );
};

export default MenuCard;

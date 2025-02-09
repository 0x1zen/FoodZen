import { CDN_URL } from "../utils/constants";

const MenuCard = (props) => {
  const { name, price, imgId } = props;
  const imgLink = CDN_URL + imgId;

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text-lg font-semibold text-gray-800">₹{price / 100}</h3>
      </div>
      <img
        className="w-20 h-20 object-cover rounded-full ml-4"
        src={imgLink}
        alt={name}
      />
    </div>
  );
};

export default MenuCard;

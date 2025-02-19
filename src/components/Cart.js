import { useDispatch, useSelector } from "react-redux";
import { CDN_URL, DEFAULT_IMG } from "../utils/constants.js";
import { clearCart } from "../utils/cartSlice.js";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-3">
      <div className="flex">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 m-5">
          Your Cart
        </h1>
        <button
          className="ml-auto px-6 py-2 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all cursor-pointer"
          onClick={handleClick}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => {
            const {
              id,
              name,
              price,
              defaultPrice,
              imageId,
              description,
              ratings,
            } = item?.card?.info;
            return (
              <div
                key={id}
                className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all"
              >
                <img
                  src={CDN_URL + imageId}
                  onError={(e)=>{
                    e.target.onError=null;
                    e.target.src=DEFAULT_IMG;
                  }}
                  alt={name}
                  className="w-24 h-24 object-cover rounded-lg border mr-4"
                />
                <div className="flex-1">
                  <h1 className="text-xl font-semibold text-gray-800">
                    {name}
                  </h1>
                  <p className="text-lg text-green-600 font-medium">
                    ₹{(defaultPrice || price) / 100}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{description}</p>
                  <p className="text-sm text-yellow-500 font-medium mt-2">
                    ⭐ {ratings?.aggregatedRating?.rating}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;

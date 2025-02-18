import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants.js";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      {cartItems.map((item) => {
        const { name, price, defaultPrice, imageId, description, ratings } =
          item;
        return (
          <div>
            <h1>{name}</h1>
            <h1>{price || defaultPrice}</h1>
            <img src={CDN_URL + imageId}></img>
            <p>{description}</p>
            <p>{ratings}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;

import { useContext } from "react";
import { cartContext } from "./../../contexts/cart-context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { updateCartItemQty } = useContext(cartContext);

  // const testFunction = (dir) => {
  //   updateCartItemQty(cartItem,dir);
  //   console.log("testFunction");
  // };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl || "https://via.placeholder.com/150"} alt={name} />
      </div>
      <span className="name">{name}</span>
      <p className="quantity">
        <span
        // onClick={testFunction(-1)}
        >
          {"<"}
        </span>
        {quantity}
        <span
        //  onClick={testFunction(1)}
        >
          {">"}
        </span>
      </p>
      <span className="price">${price}</span>
      <span className="remove-button">X</span>
    </div>
  );
};

export default CheckoutItem;

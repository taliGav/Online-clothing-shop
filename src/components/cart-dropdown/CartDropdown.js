import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { cartContext } from "./../../contexts/cart-context";

import CartItem from "./../cart-item/CartItem";
import Button from "./../button/Button";

const CartDropdown = () => {
  const { cartItems } = useContext(cartContext);

  console.log("cartItems on cartdropdown",cartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

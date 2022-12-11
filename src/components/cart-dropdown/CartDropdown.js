import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { CartContext } from "./../../contexts/cart-context";
import { Link } from "react-router-dom";

import CartItem from "./../cart-item/CartItem";
import Button from "./../button/Button";

const CartDropdown = () => {
  const { cartItems , toggleCartDropdown} = useContext(CartContext);

  console.log("cartItems on cartdropdown", cartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button onClick={toggleCartDropdown}>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
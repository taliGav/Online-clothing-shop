import { useContext } from "react";
import { CartContext } from "./../../contexts/cart-context";
import { Link } from "react-router-dom";

import CartItem from "./../cart-item/CartItem";
import Button from "./../button/Button";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, toggleCartDropdown } = useContext(CartContext);

  // console.log("cartItems on cartdropdown", cartItems);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      {/* <Link to="/checkout" onClick={toggleCartDropdown}>
       GO TO CHECKOUT
      </Link> */}
      <Link to="/checkout">
        <Button onClick={toggleCartDropdown}>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

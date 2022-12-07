import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { useContext } from "react";
import { cartContext } from "./../../contexts/cart-context";
import "./cart-icon.styles.scss";

const CartIcon = ({onClick}) => {
  const {itemsInCart} = useContext(cartContext);

  return (
    <div onClick={onClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsInCart}</span>
    </div>
  );
};

export default CartIcon;

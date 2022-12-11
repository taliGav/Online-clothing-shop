import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "./../../contexts/cart-context";
import "./cart-icon.styles.scss";

const CartIcon = ({onClick}) => {
  const {cartItemsCount} = useContext(CartContext);

  return (
    <div onClick={onClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;

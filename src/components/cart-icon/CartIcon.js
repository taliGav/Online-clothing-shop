import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({onClick}) => {
  const number = 10;
  return (
    <div onClick={onClick} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{number}</span>
    </div>
  );
};

export default CartIcon;

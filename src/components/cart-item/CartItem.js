import "./cart-item.styles.scss";

const CartItem = ({cartItem}) => {
  const { name,
    //  price, imageUrl,
      quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <h2 className="name">{name}</h2>
      <span className="quantity">{quantity}</span>
    </div>
  );
};

export default CartItem;

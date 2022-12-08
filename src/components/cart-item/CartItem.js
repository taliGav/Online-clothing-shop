import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl || "https://via.placeholder.com/150"} alt={name} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span className="quantity">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

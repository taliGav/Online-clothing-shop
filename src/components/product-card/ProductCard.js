import { useContext } from "react";

import { CartContext } from "./../../contexts/cart-context";

import Button from "./../button/Button";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img
        src={imageUrl ? imageUrl : "https://via.placeholder.com/150"}
        alt={name}
      />
      <div className="product-card-info">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;

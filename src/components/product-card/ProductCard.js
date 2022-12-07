import "./product-card.styles.scss";
import { useContext } from "react";
import { cartContext } from "./../../contexts/cart-context";
import Button from "./../button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(cartContext);

  const handleAddToCart = () => addItemToCart(product)

  return (
    <div className="product-card-container">
      {/* <div className="product-card-image"> */}
        <img
          src={imageUrl ? imageUrl : "https://via.placeholder.com/150"}
          alt={name}
        />
      {/* </div> */}
      <div className="product-card-info">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={handleAddToCart}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;

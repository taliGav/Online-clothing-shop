import { useContext } from "react";

import { CartContext } from "./../../contexts/cart-context";

import Button, { BUTTON_TYPE_CLASSES } from "./../button/Button";

import {ProductCardContainer,
  ProductCardInfo,
  Name,
  Price
} from "./product-card.styles";



const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img
        src={imageUrl ? imageUrl : "https://via.placeholder.com/150"}
        alt={name}
      />
      <ProductCardInfo>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </ProductCardInfo>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;

import "./product-card.styles.scss";

import Button from "./../button/Button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
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
      <Button>Add to cart</Button>
    </div>
  );
};

export default ProductCard;

import { useContext } from "react";
import { productsContext } from "./../../contexts/products-context";
import ProductCard from "./../../components/product-card/ProductCard";

import "./shop.styles.scss";


const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <div className="shop-page">
      <div className="products-container">
        <h1>Shop</h1>
        <h2>Hats</h2>

        {products.map(({ id, ...otherCollectionProps }) => (
          <ProductCard key={id} product={otherCollectionProps} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

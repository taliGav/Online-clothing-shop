import { useContext } from "react";
import { productsContext } from "./../../contexts/products-context";
import ProductCard from "./../../components/product-card/ProductCard";

import "./shop.styles.scss";


const Shop = () => {
  const { products } = useContext(productsContext);

  return (
    <div className="shop-page">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;

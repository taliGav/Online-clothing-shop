import { Link } from "react-router-dom";

import ProductCard from "../product-card/ProductCard";

import "./category-preview.styles.scss";


const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link className="title" to={title}>{title.toUpperCase()}</Link>
    </h2>
    <div className="preview">
      {products
        .filter((_, idx) => idx < 4) // only show 4 items
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;

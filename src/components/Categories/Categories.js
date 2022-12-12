import CategoryItem from "../category-item/CategoryItem";
import "./categories.styles.scss";

function Categories({ categories }) {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories__container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;

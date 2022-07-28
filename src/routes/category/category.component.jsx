import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryContainer, CategoryTitle } from "./category.styles";

const Category = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  const capitalize = () => {
    const firstLetterUpperCase = category.split("")[0].toUpperCase();
    const arr = category.split("");
    arr.splice(0, 1, firstLetterUpperCase);
    const capitaliced = arr.join("");
    return capitaliced;
  };

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{capitalize()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;

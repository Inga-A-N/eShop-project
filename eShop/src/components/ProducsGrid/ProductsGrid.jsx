import React from "react";
import style from "./ProductsGrid.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const ProductsGrid = ({ products }) => {
  return (
    <section className={style.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsGrid;

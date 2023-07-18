import React from "react";
import style from "./FeaturedProducts.module.scss";
import FeaturedCard from "../FeaturedCard/FeaturedCard";

const FeaturedProducts = ({ products }) => {
  return (
    <>
      <h3>Featured Products</h3>
      <div className={style.featuredGrid}>
        {products.map((product) =>
          product.featured ? (
            <FeaturedCard key={product.id} product={product} />
          ) : null
        )}
      </div>
    </>
  );
};

export default FeaturedProducts;

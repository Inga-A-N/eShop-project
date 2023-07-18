import React from "react";
import ProductsGrid from "../../components/ProducsGrid/ProductsGrid";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const HomePage = ({ products }) => {
  return (
    <>
      <h2>HomePage</h2>
      <FeaturedProducts products={products} />
      <ProductsGrid products={products} />
    </>
  );
};

export default HomePage;

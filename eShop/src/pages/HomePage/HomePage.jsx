import React from "react";
import ProductsGrid from "../../components/ProducsGrid/ProductsGrid";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import { getAllProducts } from "../../services/product-service";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((productData) => setProducts(productData))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h2>HomePage</h2>
      <FeaturedProducts products={products} />
      <ProductsGrid products={products} />
    </>
  );
};

export default HomePage;

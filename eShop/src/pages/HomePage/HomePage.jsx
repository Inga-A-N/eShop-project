import React from "react";
import ProductsGrid from "../../components/ProducsGrid/ProductsGrid";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import { getAllProducts } from "../../services/product-service";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import style from "../../common_styles.module.scss";

const HomePage = ({ items, buttonClick }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((productData) => setProducts(productData))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Link to={"/cart"} className={style.navAndLinks}>
        <p>Shopping cart</p>
      </Link>
      <FeaturedProducts
        items={items}
        products={products}
        buttonClick={buttonClick}
      />
      <ProductsGrid
        products={products}
        items={items}
        buttonClick={buttonClick}
      />
    </>
  );
};

export default HomePage;

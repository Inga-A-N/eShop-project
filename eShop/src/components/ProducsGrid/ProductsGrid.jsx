import React, { useContext } from "react";
import style from "./ProductsGrid.module.scss";
import styles from "../../common_styles.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import Context from "../../context/Context";

const ProductsGrid = ({ products, items, buttonClick }) => {
  // const data = useContext(Context);
  // console.log(data);

  return (
    <>
      <div className={styles.headingWithLines}>
        <h3> SHOP ALL </h3>
      </div>
      <section className={style.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            items={items}
            buttonClick={buttonClick}
          />
        ))}
      </section>
    </>
  );
};

export default ProductsGrid;

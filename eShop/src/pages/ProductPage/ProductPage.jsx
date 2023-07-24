import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../services/product-service";

import style from "../../common_styles.module.scss";
import Button from "../../components/Button/Button";

const ProductPage = ({ buttonClick }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getProduct(id)
      .then((product) => setProduct(product))
      .catch((error) => setError(error));
  }, []);
  return (
    <section>
      <Link to={"/cart"} className={style.navAndLinks}>
        <p>Shopping cart</p>
      </Link>
      {product && (
        <main>
          <h2>{product.name}</h2>
          <h3>${product.price}</h3>

          <img
            src={product.image}
            alt={product.name}
            style={{ width: "500px" }}
          />
          <p>{product.description}</p>
        </main>
      )}
      {error && <p>{error.message}</p>}

      <Button id={id} buttonClick={buttonClick} />
      <Link to={"/"}>Go Back</Link>
    </section>
  );
};

export default ProductPage;

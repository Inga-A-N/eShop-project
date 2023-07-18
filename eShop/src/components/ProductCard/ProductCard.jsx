import React from "react";
import pic from "../../assets/no-image-available-icon.webp";
import style from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  return (
    <section className={style.card}>
      {image ? <img src={image} alt="" /> : <img src={pic} alt="No image" />}
      <h3>This is my product</h3>
      <h4>{name}</h4>
      <h4>Price: AUD {price}</h4>
      <h4>Quantity</h4>
    </section>
  );
};

export default ProductCard;

import React from "react";
import pic from "../../assets/no-image-available-icon.webp";
import style from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, price, image, id } = product;
  return (
    <Link to={id} className={style.card}>
      <h4>{name}</h4>
      {image ? <img src={image} alt="" /> : <img src={pic} alt="No image" />}

      <h4>Price: ${price.toFixed(2)}</h4>
      {/* <Link to={id}>See More</Link> */}
    </Link>
  );
};

export default ProductCard;

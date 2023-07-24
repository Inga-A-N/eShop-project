import React from "react";
import pic from "../../assets/no-image-available-icon.webp";
import style from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ProductCard = ({ product, buttonClick }) => {
  const { name, price, image, id } = product;
  return (
    <div to={id} className={style.card}>
      <h4>{name}</h4>
      <Link to={id}>
        {image ? <img src={image} alt="" /> : <img src={pic} alt="No image" />}
      </Link>

      <h4>Price: ${price.toFixed(2)}</h4>
      <Button id={id} buttonClick={buttonClick} />
    </div>
  );
};

export default ProductCard;

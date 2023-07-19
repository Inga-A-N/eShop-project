import React from "react";
import style from "./FeaturedCard.module.scss";
import pic from "../../assets/no-image-available-icon.webp";
import { Link } from "react-router-dom";

const FeaturedCard = ({ product }) => {
  const { name, image, id } = product;

  return (
    <div className={style.featuredCard}>
      <h4>FeaturedCard</h4>
      {image ? <img src={image} alt="" /> : <img src={pic} alt="No image" />}

      <h4>{name}</h4>
      <Link to={id}>See More</Link>
    </div>
  );
};

export default FeaturedCard;

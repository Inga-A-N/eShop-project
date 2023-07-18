import React from "react";
import style from "./FeaturedCard.module.scss";
import pic from "../../assets/no-image-available-icon.webp";

const FeaturedCard = ({ product }) => {
  const { name, image } = product;

  return (
    <div className={style.featuredCard}>
      <h4>FeaturedCard</h4>
      {image ? <img src={image} alt="" /> : <img src={pic} alt="No image" />}

      <h4>{name}</h4>
    </div>
  );
};

export default FeaturedCard;

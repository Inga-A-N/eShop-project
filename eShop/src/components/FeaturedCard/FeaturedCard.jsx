import React from "react";
import style from "./FeaturedCard.module.scss";
import pic from "../../assets/no-image-available-icon.webp";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const FeaturedCard = ({ product, buttonClick }) => {
  const { name, image, id } = product;

  return (
    <div className={style.featuredCard}>
      <h4>{name}</h4>
      <Link to={id}>
        {image ? <img src={image} alt="" /> : <img src={pic} alt="No image" />}
      </Link>
      <div>
        <Link to={id}>See More</Link>
      </div>
      <Button id={id} buttonClick={buttonClick} />
    </div>
  );
};

export default FeaturedCard;

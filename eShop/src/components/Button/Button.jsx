import React from "react";
import style from "./Button.module.scss";

const Button = ({ id, buttonClick }) => {
  return (
    <div>
      <button
        onClick={buttonClick}
        id={id}
        name="add"
        className={style.addToCart}
      >
        <span className="btn__content">ADD TO CART</span>
      </button>
    </div>
  );
};

export default Button;

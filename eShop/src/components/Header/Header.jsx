import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";

const Header = () => {
  return (
    <div>
      <Link to={"/"} className={style.header}>
        <h1></h1>
      </Link>
    </div>
  );
};

export default Header;

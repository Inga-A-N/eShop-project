import React from "react";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to={"/"} className={style.header}>
      <h1>A-MAZE eShop</h1>
    </Link>
  );
};

export default Header;

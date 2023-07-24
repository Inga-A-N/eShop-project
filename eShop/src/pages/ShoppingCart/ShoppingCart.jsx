import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../../services/product-service";

const ShoppingCart = ({ items }) => {
  const [cartList, setCartList] = useState([]);

  // const [error, setError] = useState(null);
  console.log(items);
  useEffect(() => {
    items.map((i) => {
      console.log(i);
      getProduct(i)
        .then((cartItem) => cartList.push(cartItem))
        .catch((error) => setError(error));
    });
    setCartList(cartList);
  }, []);

  return (
    <>
      {cartList
        ? cartList.map((oneItem) => (
            <h3 key={cartList.indexOf(oneItem)}> {oneItem.name}</h3>
          ))
        : null}
      <Link to={"/"} style={{ color: "black" }}>
        Continue shopping
      </Link>
    </>
  );
};

export default ShoppingCart;

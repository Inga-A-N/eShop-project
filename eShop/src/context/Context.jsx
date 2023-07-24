import React from "react";
import { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const ShopContext = createContext();

// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 0; i< )
// }

export const Context = (props) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    totalPrice: 0,
    totalQuantity: 0,
  });
  //   const [cartItems, setCartItems] = useState();
  return (
    <ShopContext.Provider value={{ ...cart, dispatch }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default Context;

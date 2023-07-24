import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { testDatabse } from "./services/product-service";
import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Context from "./context/Context";

function App() {
  testDatabse();
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   getAllProducts()
  //     .then((productData) => setProducts(productData))
  //     .catch((error) => console.log(error));
  // }, []);
  const [cartItems, setCartItems] = useState([]);

  const handleButtonClick = (event) => {
    cartItems.push(event.currentTarget.id);
    setCartItems(cartItems);

    console.log(cartItems);
  };

  return (
    // <Context>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage items={cartItems} buttonClick={handleButtonClick} />
          }
        />
        <Route
          path="/:id"
          element={
            <ProductPage items={cartItems} buttonClick={handleButtonClick} />
          }
        />
        <Route path="/cart" element={<ShoppingCart items={cartItems} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    // </Context>
  );
}

export default App;

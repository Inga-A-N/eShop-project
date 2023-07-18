import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getAllProducts, testDatabse } from "./services/product-service";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductsGrid from "./components/ProducsGrid/ProductsGrid";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  testDatabse();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts()
      .then((productData) => setProducts(productData))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/* <BrowserRouter>
        <Header />

        <Routes>
          <ProductsGrid />
        </Routes>

        <Footer />
      </BrowserRouter> */}
      <Header />
      <HomePage products={products} />
      <ProductPage />
      <ShoppingCart />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./Contexts/ProductContext";

import ProductList from "./PAGES/ProductList";
import Cart from "./PAGES/Cart";
import NavBar from "./PAGES/NavBar";

const App = () => {
  return (
    <ProductProvider>

        <NavBar />

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </ProductProvider>
  );
};

export default App;

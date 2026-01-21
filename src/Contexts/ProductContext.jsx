import { createContext, useContext, useState } from "react";
import { products as productData } from "../assets/data.js";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  
//FITER SEARCH
  const filteredProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
// ADD TO CART FUNCTION
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
//If the product was NOT in the cart- Keep all existing cart item, Add the new product by qnt 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  //REMOVE FROM CART
    const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        products: filteredProducts,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);

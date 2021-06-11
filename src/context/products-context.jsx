import React, { createContext, useState } from "react";
import ProductItems from "../components/ProductItems";


export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(ProductItems);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;

import React, { createContext, useState } from 'react'
import productItems from "./ProductItems";


export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const [products] = useState(productItems);

    return ( <
        ProductsContext.Provider value = {
            { products } } > {
            children
        } <
        /ProductsContext.Provider>
    );
}

export default ProductsContextProvider
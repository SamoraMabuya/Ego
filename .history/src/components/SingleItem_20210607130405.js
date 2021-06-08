import React, { useContext, useState, useEffect } from 'react'
import '../Sass/SingleItem.scss'
import { ProductsContext } from '../context/product-context'
import { withRouter } from '../context/product-context'
import './SingleItem'

const SingleProduct = ({ match, history: { push } }) => {
    const { products } = useContext(ProductsContext);
    const { id } = match.params;
    const [product, setProduct] = useState(null);
    useEffect {
        () => {
            const product = products.find(item => Number(item.id) === Number(id));

            if (!product) {
                return push('./Shop.js')
            }
            setProduct(product);
        }
    };

    const { imageUrl, title, price, description } = product;
    return ( <
        Layout >
        <
        div >
        <
        div >
        <
        img src = { imageUrl }
        alt = "product" / >
        <
        /div> <
        /div> <
        /Layout>
    )
}
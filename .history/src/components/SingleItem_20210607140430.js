import React, {useContext, useState, useEffect} from 'react'
import '../Sass/SingleItem.scss'
import {ProductsContext} from '../context/product-context'
import {withRouter} from 'react-router-dom'
import './SingleItem'

const SingleProduct = ({match, history: {push}}) => {
  const {products} = useContext(ProductsContext);
  const {id} = match.params;
  const [product, setProduct] = useState(null); 
  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id));

    if(!product) {
      return push('./Contact.js')
    }
    setProduct(product);
  });

  if(!product) { return null }

  const {imageUrl, title, price, description} = product;
  return (
    <div>
      <div className="single-product-container">
        <div className="product-image">
          <img src={imageUrl} alt="product"/>
        </div>
        <div className="product-details">
        <div className="">
          <h3>{title}</h3>
          <p>{price}</p>
          <div className="add-to-cart-btns">
          <button className="button is-white nomad-btn" id='btn-white-outline'>
            Add To Cart
          </button>
          <button className="button is-black nomad-btn" id='btn-white-outline'>
            Proceed to checkout
          </button>
          </div>
          <div className="product-description">
          <p>{description}</p>

          </div>   
        </div>
        </div>
      
      </div>
    </div>
  )
}

export default withRouter(SingleProduct)
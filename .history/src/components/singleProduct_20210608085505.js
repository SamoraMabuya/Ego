import React, { useContext, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./Navbar";


const SingleProduct = ({ match, history: {push}}) => {
  const { products } = useContext(ProductContext);
  const {id } = match.params;
  const [product, setproduct] = useState(null);

  useEffect(() => {
    const product = products.find(item => Number(item,id) === Number(id));

    if(!product) {
      return push('./Shop');
    }

    setproduct(product)
  });

  const {image, shoeName, price, color, category} = product;
  return (
    <div>
        <Navbar/>
        <div className="singleProduct">
              
      <div className="productImage">
        <img src={image} alt="product" />
      </div>

      <div className="product-details">
        <div className="name-price">
        <h3>{shoeName}</h3>
        <p>{price}</p>
        </div>
       
        <span>{color}</span>
        <span>{category}</span>
      </div>

      <div>

      <button className="cartbtn">
        Add to cart
      </button>
      <button className="proceedbtn">
        Proceed to checkout
      </button>

      </div>


        </div>

    </div>  
  )
}

export default withRouter(SingleProduct)
    
    

  


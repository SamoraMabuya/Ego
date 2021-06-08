import React, { useContext, useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'
import Navbar from "./Navbar";
import { ProductsContext } from "./products-context";
import '../Sass/SingleProduct.scss'
import Image from "react-bootstrap/Image";

const SingleProduct = ({ match, history: { push } }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setproduct] = useState(null);


  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));

    if (!product) {
      return push("/Shop");
    }

    setproduct(product);
  });

  if(!product) {return null}

  const {id, image, shoeName, price, color, cname } = product;
  return (
    <div>
      <Navbar />
      <div className="singleProduct">
        <div className="productImage">
          <Image class="productImg" src={image} alt="image" fluid />
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
          <button className="cartbtn">Add to cart</button>
          <button className="proceedbtn">Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(SingleProduct);

import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../Sass/Shop.scss";
import {ProductContext} from "./ProductItems";
import Image from "react-bootstrap/Image";


export default function Details() { 
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  const details = products.filter((product, index) => {
    return product.id === id;
  });

  console.log(details);

  return (

    <div>
             <Navbar/>
             hello
             <div>
             {details.map((product) => {
            const { id, image, shoeName, price, color, cname } = product;
            return (
              <div className="shoeItemContainer" key={id}>
                <div className="shoeItem">
                  <Image className={cname} src={image} alt={shoeName} fluid />
                  <div className="darkBanner">
                  </div>{" "}
                </div>{" "}
              </div>
            )}
             )}
                            </div>
                            </div>
  )
            }

              
    
    
    

  


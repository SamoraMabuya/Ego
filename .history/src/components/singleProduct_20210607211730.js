import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "../Sass/Shop.scss";
import {ProductContext} from "./ProductItems";


export default function Details() { 
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);

  const details = products.filter((product, index) => {
    return product.id === id;
  });

  console.log(details);

  return (
    <>
     <Navbar/>
     {details.map(product => (
        <div className="details" key={product.id}>
          {/* <div className="img-container"
          style={{ backgroundImage: `url(${product.images[0]})` }}></div> */}
        </div>
     ))
        })
</>


  




//   return (
//     <div>
//       Details
//       {details.map(product => (
//         <div className="details" key={product.id}>
//           <div className="img-container"
//           style={{ backgroundImage: `url(${product.images[2]})` }} />
//           <div className="box-details">
//             <h2 shoeName={product.shoeName}>{product.shoeName}</h2>
//             <h3 title={product.price}>{product.price}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SingleProduct;

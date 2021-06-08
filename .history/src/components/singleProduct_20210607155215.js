import React from "react";
import "../Sass/Shop.scss";
import productItems from "./ProductItems";

const SingleProduct = () => {
  const [product, setProduct] = useState(productItems);

  return (
    <div>
      <Navbar />
      <h1 className="text-2x1 font-bold mb-3">
        {product.product.shoeName}
      </h1>
    </div>
  );
};

export default SingleProduct;

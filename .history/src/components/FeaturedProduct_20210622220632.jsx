import React from 'react'
import { withRouter } from 'react-router'
import '../Sass/Shop.scss'

const ShoeLabel = (props) => {
  return <span className="ShoeLabel"> {props.label} </span>;
};
const Price = (props) => {
  return <span className="Price"> {props.cost} </span>;
};

const Color = (props) => {
  return <span className="colorTag"> {props.color} </span>;
};
const FeaturedProduct = (props) => {
  const { id, image, shoeName, price, color, cname, history } = shoeProduct;
  return (
    <div className="shoeItemContainer">
        <div className=" shoeItem" onClick={() => history.push(`/SingleProduct/${id}`)}>
          <Image className={cname} src={image} alt={shoeName} fluid />
          <div className="darkBanner">
            <ShoeLabel label={shoeName} /> <Price cost={price} />{" "}
            <Color color={color} />{" "}
          </div>{" "}
        </div>{" "}
    </div>
  );
}

export default withRouter(FeaturedProduct);
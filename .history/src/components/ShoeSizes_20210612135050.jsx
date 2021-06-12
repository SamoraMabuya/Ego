import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  const shoeSize = (props) => {
    return <span className="ShoeLabel"> {props.defaultSize} </span>;

  }


  return (
    <>
    <shoeSize/>
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          defaultSize={defaultSize === sizeShoe}
          name={sizeShoe}
          onClick={() => setdefaultSize(sizeShoe)}
          className={
            sizeShoe === defaultSize ? "shoeSizebtn sizeSelected" : "shoeSizebtn"
          }
        >
          {sizeShoe}
        </button>
      ))}
 
    </>
  );
};

export default ShoeSizes;

import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons, displaySize }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  const handleClick = (defaultSize, id) => {
    setdefaultSize(id);
    displaySize(defaultSize)
  }

  return (
    <>
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          name={sizeShoe}
          onClick={(defaultSize) => handleClick(defaultSize, i)}
          className={
            i === defaultSize ? "shoeSizebtn sizeSelected" : "shoeSizebtn"
          }
        >
          {sizeShoe}
        </button>
      ))}
   
    </>
  );
};

export default ShoeSizes;

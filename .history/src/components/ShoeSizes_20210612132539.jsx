import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons}) => {
  const [defaultSize, setdefaultSize] = useState(0);


  const DisplaySize = () => {
    return <div>{defaultSize}</div>

  }
  const handleClick = (defaultSize, id) => {
    setdefaultSize(id);
    DisplaySize(defaultSize)
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

import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons, doSomethingAfterClick }) => {
  const [defaultSize, setdefaultSize] = useState(0);


  const handleClick = (event, id) => {
    setdefaultSize(id);
    doSomethingAfterClick(event);
  };


  return (
    <>
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          name={sizeShoe}
          onClick={(event) => handleClick(event, i)}
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

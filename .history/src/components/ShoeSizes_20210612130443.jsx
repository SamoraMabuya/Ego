import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(buttons[0]);

  return (
    <>
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          defaultSize={defaultSize === i}
          name={sizeShoe}
          onClick={() => setdefaultSize(i)}
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

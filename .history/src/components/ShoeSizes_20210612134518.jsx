import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  return (
    <>
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
      <p>{defaultSize}</p>
 
    </>
  );
};

export default ShoeSizes;
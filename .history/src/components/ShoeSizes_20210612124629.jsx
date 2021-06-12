import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(0);
  
  return (
    <div>

      {" "}
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          name={sizeShoe}
          onClick={() => setdefaultSize(i)}
          className={
            i === defaultSize ? "shoeSizebtn sizeSelected" : "shoeSizebtn"
          }
        >
          {sizeShoe}
        </button>
        <div>{defaultSize}</div>
      ))}
  );
  </div>

};

export default ShoeSizes;

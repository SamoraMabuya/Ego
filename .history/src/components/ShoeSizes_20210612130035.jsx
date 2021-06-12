import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  return (
    <>
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          active={active === i}
          name={sizeShoe}
          onClick={() => setdefaultSize(i)}
          className={
            i === defaultSize ? "shoeSizebtn sizeSelected" : "shoeSizebtn"
          }
        >
          {sizeShoe}
        </button>
      ))}
      <p>
        {defaultSize}
      </p>
    </>
  );
};

export default ShoeSizes;

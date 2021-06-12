import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(buttons[0]);

  return (
    <>
      <div className="PickSize">Size: {defaultSize}</div>
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          defaultSize={defaultSize === sizeShoe}
          name={sizeShoe}
          onClick={() => setdefaultSize(sizeShoe)}
          className={
            sizeShoe === defaultSize
              ? "shoeSizebtn sizeSelected"
              : "shoeSizebtn"
          }
        >
          {sizeShoe}
        </button>
      ))}
    </>
  );
};

export default ShoeSizes;

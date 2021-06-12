import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons, selectedSize }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  const handleClick = (Event, id) => {
    setdefaultSize(id);
    selectedSize(Event);
  };

  return (
    <>
      {" "}
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          name={sizeShoe}
          onClick={() => handleClick(Event, i)}
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

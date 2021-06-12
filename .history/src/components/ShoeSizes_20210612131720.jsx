import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons, displaySize }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  const handleClick = (Event, id) => {
    setdefaultSize(id);
    displaySize(Event)
  }

  return (
    <>
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          name={sizeShoe}
          onClick={(Event) => handleClick(Event, i)}
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

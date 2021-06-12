import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  const handleClick = (e, id) => {
    setdefaultSize(id);
    doSomethingAfterClick(e);
  };

  return (
    <>
      {" "}
      {buttons.map((sizeShoe, i) => (
        <button
          key={i}
          name={sizeShoe}
          onClick={() => handleClick(e,i)}
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

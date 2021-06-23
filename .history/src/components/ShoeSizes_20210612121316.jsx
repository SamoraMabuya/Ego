import React, { useState } from 'react'
import "../Sass/_shoeSize.scss";

const ShoeSizes = (buttons) => {

  const [defaultSize, setdefaultSize] = useSate(0)
  return (
    <>
      {Button.map((sizeShoe, i) => {
        <button key{i} name={sizeShoe} onClick={() => setdefaultSize(i)}
        className={i === defaultSize ? "shoeSizebtn sizeSelected" :  "shoeSizebtn"}>
          {sizeShoe}
        </button>
      })}
    </>
  );
};

export default ShoeSizes;
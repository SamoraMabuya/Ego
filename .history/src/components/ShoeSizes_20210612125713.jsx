import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(0);


  const DefaultSize = (props) => {
    return <button class="defaultSize">{props.defaultSize}</button>;
  };
  return (
    <>
      <DefaultSize/>
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
      ))}
    </>
  );
};

export default ShoeSizes;

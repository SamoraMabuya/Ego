import React, { useState } from "react";
import "../Sass/_shoeSize.scss";

const ShoeSizes = ({ buttons }) => {
  const [defaultSize, setdefaultSize] = useState(0);

  const DefaultSize = (props) => {
    return <div value={defaultSize} class="defaultSize">{props.defaultSize}</div>;
  };
  return (
    <>
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
      <p>
        <DefaultSize value={setdefaultSize} defaultSize={defaultSize} />
      </p>
    </>
  );
};

export default ShoeSizes;

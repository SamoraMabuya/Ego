import React, { useState } from "react";
import "../Sass/contact.scss";


const Contact = () => {

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1 className={show ? "heading" : "hidden"}> This Heading </h1>{" "}
      <button className="myButtons" onClick={() => setShow(true)}>
        Show{" "}
      </button>{" "}
      <button className="myButtons" onClick={() => setShow(false)}>
        Hide{" "}
      </button>{" "}
    </div>
  );
};

export default Contact;

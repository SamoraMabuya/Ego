import React from "react";
import "../Sass/footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Stores = [{
  StoreHeading: 'Stores', 
  storef: 'Pretoria CBD 012 Central'
},
storef: 'Pretoria CBD 012 Central'

{


}
]
const Footer = (props) => {
  return <div className="footerSection">
    <ul>
      {Stores.map((Stores) => {
        return<li key={storef}>
          <strong>{Stores.StoreHeading}</strong>
          <p>{Stores.store}</p>
          </li>

      })}
    </ul>

  </div>;
};

export default Footer;

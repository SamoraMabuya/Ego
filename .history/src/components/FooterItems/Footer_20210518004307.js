import React from "react";
import "../Sass/footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Stores = [{
  StoreHeading: 'Stores', 
  store: 'Pretoria CBD 012 Central'
},
{
store: 'Joburg Newtown Junction'
},
{
store: 'Mall of Thembisa'
},
{
  store: 'Mall of the North'
},
{
  store: 'Masingita Mall'
}

]
const Footer = (props) => {
  return <div className="footerSection">
    <ul>
      {Stores.map((Stores) => {
        return<li key={Stores}>
          <strong>{Stores.StoreHeading}</strong>
          <p>{Stores.store}</p>
          </li>

      })}
    </ul>

  </div>;
};

export default Footer;

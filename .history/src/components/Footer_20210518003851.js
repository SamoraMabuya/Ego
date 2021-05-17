import React from "react";
import "../Sass/footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

const Stores = [{
  title: 'Home',
  url: '#',
  linkName: 'nav-links'
},
{
  title: 'Shop',
  url: '#',
  linkName: 'nav-links'
},
{
  title: 'Contact',
  url: '#',
  linkName: 'nav-links'
},
{
  title: 'About',
  url: '#',
  linkName: 'nav-links'
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

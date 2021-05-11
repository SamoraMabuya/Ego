import React from 'react'
import '../Sass/home.scss'

const Home = (props) => {
  return <div className="clickMeButton">{props.children}</div>;
};

export default Button;
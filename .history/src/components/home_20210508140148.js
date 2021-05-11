import React from 'react'
import '../Sass/home.scss'

const Button = (props) => {
  return <div className="clickMeButton">{props.children}</div>;
};

export default Button;
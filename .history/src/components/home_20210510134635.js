import React from 'react'
import '../Sass/home.scss'
import Navbar from './Navbar'
import {ReactComponent as logo} from '../logo.svg';

const Home = (props) => {
  return <div className="homeSection">
    
    <Navbar/>
    <img src={logo} className="App-logo" alt="logo" />

  </div>;
};

export default Home;
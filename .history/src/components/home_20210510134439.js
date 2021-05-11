import React from 'react'
import '../Sass/home.scss'
import Navbar from './Navbar'
import logo from './logo.svg';

const Home = (props) => {
  return <div className="homeSection">
            <img src={logo} className="App-logo" alt="logo" />

    <Navbar/>
 
  </div>;
};

export default Home;
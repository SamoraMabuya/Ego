import React from 'react'
import '../Sass/home.scss'
import Navbar from './Navbar'
import logos from '../assets/Logo/logobrown.png';

const Home = (props) => {
  return <div className="homeSection">
    
    <Navbar/>
    <img src={logos} className="App-logo" alt="logo" />

  </div>;
};

export default Home;
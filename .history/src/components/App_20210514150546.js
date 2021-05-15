import { Button } from "bootstrap"
import React from "react"
import '../Sass/App.scss'
import Home from './Home'


const App = () => {
  return (
    <div>
    <Home/>
    <Button buttonText="myButton"/>
    </div>
  
 
  );
};

export default App;
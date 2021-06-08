import React from "react";
import "../Sass/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import {Items} from './ProductItems'
import Details from "./SingleProduct"
const App = () => {
  return (
    <Items>
       <Router>
      <Switch>
        <Route exact path="/" component={Home}>
          {" "}
        </Route>
        <Route path="/Shop" element={<Shop/>} component={Shop}></Route>{" "}
        <Route path="/SingleProduct/:id" element={<Details/>} ></Route>{" "}


        <Route path="/Contact" component={Contact}>
          {" "}
        </Route>{" "}
        <Route path="/About" component={About}>
          {" "}
        </Route>{" "}
      </Switch>{" "}
    </Router>
    </Items>
   
  );
};

export default App;

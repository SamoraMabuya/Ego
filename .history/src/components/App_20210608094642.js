import React from "react";
import "../Sass/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import SingleProduct from "../components/SingleProduct";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Shop" component={Shop} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
        </Switch>
      </Router> 
    </div>
  );
};

export default App;

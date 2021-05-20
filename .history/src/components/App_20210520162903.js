import React from "react";
import "../Sass/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Shop">
          <Shop />
        </Route>

        <Route path="/Contact">
          <Contact/>
        </Route>

        <Route path="/About">
          <About/>
        </Route>


      </Switch>
    </Router>
  );
};

export default App;

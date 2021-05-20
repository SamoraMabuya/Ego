import React from "react";
import "../Sass/App.scss";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
const App = () => {
  return (

  <Router>

  <Switch>
      <Route path="/">
        <Home/>
      </Route>

      <Route path="/Shop">
        <Shop/>
      </Route>

    </Switch>
    </Router>
  
  );
  
};

export default App;

import React from "react";
import "../Sass/App.scss";
import Home from "./Home";

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

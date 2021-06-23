import React from "react";
import "../Sass/App.scss";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import SingleProduct from "../components/SingleProduct";
import CartPage from "../components/CartPage/CartPage";
const App = () => {
  const history = useHistory();
  const handleHistory = () => {
    history.push("../components/SingleProduct")
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/Shop" component={Shop} />{" "}
        <Route path="/SingleProduct/:id" component={SingleProduct} onClick={handleHistory} />{" "}
        <Route path="/Contact" component={Contact} />{" "}
        <Route path="/About" component={About} />{" "}
        <Route path="/CartPage" component={CartPage} />{" "}
      </Switch>{" "}
    </div>
  );
};

export default App;

import "./App.css";
import React from "react";

import ShopPage from "./pages/ShopPage";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import LoginContext from "./contexts/LoginContext";
import Logging from "./components/Logging";

function App() {
  return (
    <div className="App">
      <LoginContext>
        <Navigation></Navigation>
        <Logging></Logging>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/shop" component={ShopPage}></Route>
          </Switch>
        </Router>
      </LoginContext>

      <Footer></Footer>
    </div>
  );
}

export default App;

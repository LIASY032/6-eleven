import "./App.css";
import React from "react";

import ShopPage from "./pages/ShopPage";

import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import LoginContext from "./contexts/LoginContext";
import Logging from "./components/Logging";
import { useItemDetails } from "./contexts/ItemDetailsContext";
import ItemDetails from "./components/ItemDetails";

function App() {
  const { isOpenModal, handleCloseModal } = useItemDetails();
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
        <ItemDetails
          isShow={isOpenModal.isOpen}
          handleClose={handleCloseModal}
          item={isOpenModal.item}
        ></ItemDetails>
        <Footer></Footer>
      </LoginContext>
    </div>
  );
}

export default App;

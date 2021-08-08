import "./App.css";
import React from "react";

import ShopPage from "./pages/ShopPage";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./statics/Navigation/Navigation";

import Logging from "./statics/Modal/Logging";
import { useItemDetails } from "./contexts";
import { ItemDetails } from "./statics/Modal";

import { useDispatch } from "react-redux";
import { fetchItems } from "./store/actions";
function App() {
  const dispatch = useDispatch();
  dispatch(fetchItems());

  const { isOpenModal, handleCloseModal } = useItemDetails();
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

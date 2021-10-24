import "./App.css";
import React from "react";

import ShopPage from "./pages/ShopPage";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./statics/Navigation/Navigation";

import { useItemDetails } from "./contexts";
import { ItemDetails, Logging, Registration } from "./statics/Modal";

import { useDispatch } from "react-redux";
import { fetchItems, getUserInfo } from "./store/actions";
function App() {
  const dispatch = useDispatch();
  fetchItems(dispatch);
  getUserInfo(dispatch);

  const { isOpenModal, handleCloseModal } = useItemDetails();
  return (
    <div className="App">
      <Navigation></Navigation>
      <Logging></Logging>
      <Registration></Registration>

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

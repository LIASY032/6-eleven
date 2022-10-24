import "./App.css";
import React from "react";

import ShopPage from "./pages/ShopPage";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./statics/Navigation/Navigation";

import { ItemDetails, Logging, Registration } from "./statics/Modal";

import { useDispatch } from "react-redux";
import {
  fetchItems,
  getUserInfo,
  closeAllModels,
  isLogin,
  isRegistration,
} from "./store/actions";
import { useSelector } from "react-redux";
import Chat from "./components/Chat";
function App() {
  const dispatch = useDispatch();

  // React.useMemo(() => {
  //   //Once the App running, fetch data  (one time)
  //   fetchItems(dispatch);
  //   getUserInfo(dispatch);
  // }, [dispatch]);
  React.useEffect(() => {
    //check the user login (When App component updated)
    fetchItems(dispatch);
    getUserInfo(dispatch);
  }, []);

  const handleCloseModal = () => {
    closeAllModels(dispatch);
  };
  const modelController = useSelector((state) => state.modelController);
  const openLogin = () => {
    isLogin(dispatch);
  };
  const openRegistration = () => {
    isRegistration(dispatch);
  };

  return (
    <div className="App">
      <Navigation userLoginFunction={openLogin}></Navigation>
      {/* User parts */}
      <Logging
        handleClose={handleCloseModal}
        isShow={modelController.isLogin}
        moveToRegistration={openRegistration}
      ></Logging>
      <Registration
        isShow={modelController.isRegistration}
        handleClose={handleCloseModal}
      ></Registration>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/shop" component={ShopPage}></Route>
        </Switch>
      </Router>
      {modelController.itemDetails.item && (
        <ItemDetails
          isShow={modelController.itemDetails.isShow}
          handleClose={handleCloseModal}
          item={modelController.itemDetails.item}
        ></ItemDetails>
      )}
      <Chat />
      <Footer></Footer>
    </div>
  );
}

export default App;

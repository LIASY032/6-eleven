import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ItemDetailsContext from "./contexts/ItemDetailsContext";
import CartContainerContext from "./contexts/CartContainerContext";

ReactDOM.render(
  <ItemDetailsContext>
    <CartContainerContext>
      <App />
    </CartContainerContext>
  </ItemDetailsContext>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

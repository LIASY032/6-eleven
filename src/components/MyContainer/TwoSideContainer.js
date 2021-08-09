import React from "react";
import "./styles.css";

let half = true;

function LeftSide({ children, notHalf, ...rest }) {
  half = notHalf ? false : true;
  return (
    <li className={`side-${notHalf ? "30" : "50"}`} {...rest}>
      {children}
    </li>
  );
}

function RightSide({ children, ...rest }) {
  return (
    <li className={`side-${half ? "50" : "70"}`} {...rest}>
      {children}
    </li>
  );
}

function TwoSideContainer({ children, flexStart, className, ...rest }) {
  return (
    <ul
      className={`two-side-container align-container-item-${
        flexStart ? "flex-start" : "center"
      } ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
}

TwoSideContainer.Left = LeftSide;
TwoSideContainer.Right = RightSide;

export default TwoSideContainer;

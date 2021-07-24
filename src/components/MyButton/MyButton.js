import React from "react";
import "./styles.css";

function MyButton({
  showContent,
  setShowContent,

  children,
}) {
  return (
    <button
      className="my-button padding-underline"
      onClick={function () {
        setShowContent(!showContent);
      }}
    >
      <span>{children}</span>

      <span> {showContent ? "-" : "+"}</span>
    </button>
  );
}

export default MyButton;

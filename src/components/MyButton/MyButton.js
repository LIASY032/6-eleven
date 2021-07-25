import React from "react";
import "./styles.css";

function MyButton({
  showContent,
  setShowContent,

  children,
  ...rest
}) {
  return (
    <button
      className="my-button padding-underline"
      onClick={function () {
        setShowContent(!showContent);
      }}
      {...rest}
    >
      <span>{children}</span>

      <span> {showContent ? "-" : "+"}</span>
    </button>
  );
}

export default MyButton;

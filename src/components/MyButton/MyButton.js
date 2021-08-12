import React from "react";
import "./styles.css";

function MyButton({
  showContent,
  setHandleFunction,
  paddingUnderline,
  className,
  children,
  ...rest
}) {
  return (
    <button
      className={`my-button  ${
        paddingUnderline ? "" : "padding-underline"
      } ${className}`}
      onClick={setHandleFunction}
      {...rest}
    >
      <span>{children}</span>
      <span> {showContent ? "-" : "+"}</span>
    </button>
  );
}

export default MyButton;

import React from "react";
import "./styles.css";

function MyButton({
  showContent,
  setShowContent,
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

export default React.memo(MyButton);

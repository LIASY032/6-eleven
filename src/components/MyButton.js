import React from "react";

function MyButton({
  buttonContent,
  showContent,
  setShowContent,
  showUnderline,
  children,
}) {
  return (
    <div
      style={{
        padding: "0.5rem",
        borderBottomStyle: showUnderline ? "solid" : "none",
      }}
    >
      <ul
        className="my-button"
        onClick={function () {
          setShowContent(!showContent);
        }}
      >
        <li>{buttonContent}</li>
        <li>
          <span> {showContent ? "-" : "+"}</span>
        </li>
      </ul>
      <div style={{ display: showContent ? "block" : "none" }}>{children}</div>
    </div>
  );
}

export default MyButton;

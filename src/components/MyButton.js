import React from "react";

function MyButton({ buttonContent }) {
  return (
    <ul className="my-button">
      <li>{buttonContent}</li>
      <li>
        <button></button>
      </li>
    </ul>
  );
}

export default MyButton;

import React from "react";

function Selector({ children, value, onChange, ...rest }) {
  return (
    <select value={value} onChange={onChange} {...rest}>
      {children.map((op, index) => (
        <option key={index} value={index}>
          {op}
        </option>
      ))}
    </select>
  );
}

export default Selector;

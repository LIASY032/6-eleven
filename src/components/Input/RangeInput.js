import React from "react";

function RangeInput({ onChange, children, value, max, min, ...rest }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      {...rest}
    >
      {children}
    </input>
  );
}

export default RangeInput;

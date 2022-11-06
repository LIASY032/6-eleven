import React from "react";
import "./styles.css";

function ColumnItem({ children, className, ...rest }) {
  return (
    <li className={`each-column-items ${className}`} {...rest}>
      {children}
    </li>
  );
}

function ColumnContainer({ children, className, ...rest }) {
  return (
    <div className="column-container" {...rest}>
      <ul className="column-items">{children}</ul>
    </div>
  );
}

ColumnContainer.Item = ColumnItem;

export default React.memo(ColumnContainer);

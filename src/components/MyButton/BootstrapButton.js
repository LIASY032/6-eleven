import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

function BootstrapButton({ children, onClick, ...rest }) {
  return (
    <Button className="mb-3 bootstrapButton" onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

export default BootstrapButton;

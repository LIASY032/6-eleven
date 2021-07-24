import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";

function BootstrapButton({ children, onClick }) {
  return (
    <Button className="mb-3 bootstrapButton" onClick={onClick}>
      {children}
    </Button>
  );
}

export default BootstrapButton;

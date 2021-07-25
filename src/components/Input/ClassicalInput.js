import React from "react";
import { Form } from "react-bootstrap";

function ClassicalInput({ label, type, textMuted }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={label} />
      {textMuted && <Form.Text className="text-muted">{textMuted}</Form.Text>}
    </Form.Group>
  );
}

export default ClassicalInput;

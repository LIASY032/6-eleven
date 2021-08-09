import React from "react";
import { Form } from "react-bootstrap";

const BootstrapInput = React.forwardRef((props, ref) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{props.childrenlabel}</Form.Label>
      <Form.Control ref={ref} type={props.type} placeholder={props.label} />
      {props.textMuted && (
        <Form.Text className="text-muted">{props.textMuted}</Form.Text>
      )}
    </Form.Group>
  );
});
export default BootstrapInput;

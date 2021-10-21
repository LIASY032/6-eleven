import React from "react";
import { Form } from "react-bootstrap";

const BootstrapInput = React.forwardRef((props, ref) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.childrenlabel}</Form.Label>
      <Form.Control
        ref={ref}
        type={props.type}
        name={props.name}
        placeholder={props.label}
        required={props.required}
      />
      {props.textMuted && (
        <Form.Text className="text-muted">{props.textMuted}</Form.Text>
      )}
    </Form.Group>
  );
});
export default BootstrapInput;

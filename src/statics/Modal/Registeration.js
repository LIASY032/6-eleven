import React from "react";
import { Form, Modal } from "react-bootstrap";
import { BootstrapInput } from "../../components/Input";
import { BootstrapButton } from "../../components/MyButton";
import { useResigeration } from "../../contexts";

function Registeration() {
  const { isRegisteration, setIsRegisteration } = useResigeration();
  function handleClose() {
    setIsRegisteration(0);
  }
  return (
    <>
      <Modal show={isRegisteration === 1 ? true : false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTERATION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <BootstrapInput childrenlabel="name"></BootstrapInput>
            <BootstrapInput
              childrenlabel="Email address"
              type="email"
              textMuted="We'll never share your email with anyone else."
            ></BootstrapInput>
            <BootstrapInput
              childrenlabel="Password"
              type="password"
            ></BootstrapInput>

            <BootstrapButton>Register</BootstrapButton>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Registeration;

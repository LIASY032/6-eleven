import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { BootstrapInput } from "../../components/Input";
import { BootstrapButton } from "../../components/MyButton";
import { useIsLogin } from "../../contexts/LoginContext";

function Logging() {
  const { islogin, setIsChange } = useIsLogin();
  function handleClose() {
    setIsChange(0);
  }

  return (
    <>
      <Modal show={islogin === 1 ? true : false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN IN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <BootstrapInput
              childrenlabel="Email address"
              type="email"
              textMuted="We'll never share your email with anyone else."
            ></BootstrapInput>
            <BootstrapInput
              childrenlabel="Password"
              type="password"
            ></BootstrapInput>

            <BootstrapButton>Login</BootstrapButton>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={handleClose}
            style={{ width: "100%" }}
          >
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Logging;

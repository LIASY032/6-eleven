import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Login
            </Button>
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

import React, { useRef, useState } from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import { useIsLogin } from "../contexts/LoginContext";

function Logging() {
  const idRef = useRef();

  const { islogin, setIsChange } = useIsLogin();
  function handleClose() {
    setIsChange(0);
  }

  return (
    <>
      <Modal show={islogin === 1 ? true : false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Logging;

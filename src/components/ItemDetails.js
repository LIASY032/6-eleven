import React from "react";
import { Container, Form, Button, Modal, Row, Col } from "react-bootstrap";

function ItemDetails({ isShow, handleClose, image, title, info }) {
  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img src={image}></img>
              </Col>

              <Col></Col>
            </Row>
          </Container>
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

export default ItemDetails;

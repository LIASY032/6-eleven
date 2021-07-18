import React, { useState } from "react";
import { Container, Form, Button, Modal, Row, Col } from "react-bootstrap";
import MyButton from "./MyButton";

function ItemDetails({ isShow, handleClose, image, title, info, price }) {
  const [showContent, setShowContent] = useState(false);
  return (
    <>
      <Modal show={isShow} onHide={handleClose} dialogClassName="modal-xl">
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="products">
            <li>
              <img src={image} alt={title}></img>
            </li>
            <li>
              <p>${price}</p>
              <p>Quantity</p>
              <input></input>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#385F4B",
                  borderColor: "#385F4B",
                }}
              >
                Add to Cart
              </Button>
              <Button
                style={{
                  width: "100%",
                  backgroundColor: "#385F4B",
                  borderColor: "#385F4B",
                }}
              >
                Buy Now
              </Button>
              <MyButton
                buttonContent="PRODUCT INFO"
                showContent={showContent}
                setShowContent={setShowContent}
                showUnderline={true}
              >
                {info}
              </MyButton>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemDetails;

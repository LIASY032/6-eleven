import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useCart } from "../contexts/CartContainerContext";
import MyButton from "./MyButton";

function ItemDetails({ isShow, handleClose, item }) {
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const { addItem, removeItem } = useCart();
  return (
    <>
      <Modal show={isShow} onHide={handleClose} dialogClassName="modal-xl">
        <Modal.Header closeButton>
          <Modal.Title>{item.title.toUpperCase()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="products" style={{ alignItems: "flex-start" }}>
            <li style={{ width: "50%" }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%" }}
              ></img>
            </li>
            <li style={{ width: "50%", padding: "5rem" }}>
              <p>${item.price}</p>
              <p>Quantity</p>
              <FormControl
                className="mb-3"
                style={{ width: "100%" }}
              ></FormControl>

              <Button
                className="mb-3"
                style={{
                  width: "100%",
                  backgroundColor: "#385F4B",
                  borderColor: "#385F4B",
                }}
                onClick={function () {
                  if (item !== undefined || item != null) {
                    addItem(item);
                  }
                }}
              >
                Add to Cart
              </Button>
              <Button
                className="mb-3"
                style={{
                  width: "100%",
                  backgroundColor: "#385F4B",
                  borderColor: "#385F4B",
                }}
                onClick={function () {
                  removeItem(item.id);
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
                {item.info}
              </MyButton>
              <MyButton
                buttonContent="REFUND POLICY"
                showContent={showContent1}
                setShowContent={setShowContent1}
                showUnderline={true}
              >
                I’m a Refund policy. I’m a great place to let your customers
                know what to do in case they are dissatisfied with their
                purchase. Having a straightforward refund or exchange policy is
                a great way to build trust and reassure your customers that they
                can buy with confidence.
              </MyButton>
              <MyButton
                buttonContent="SHIPPING INFO"
                showContent={showContent2}
                setShowContent={setShowContent2}
                showUnderline={false}
              >
                I'm a shipping policy. I'm a great place to add more information
                about your shipping methods, packaging and cost. Providing
                straightforward information about your shipping policy is a
                great way to build trust and reassure your customers that they
                can buy from you with confidence.
              </MyButton>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemDetails;

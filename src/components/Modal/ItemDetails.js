import React, { useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useCart } from "../../contexts/CartContainerContext";
import BootstrapButton from "../MyButton/BootstrapButton";
import MyButton from "../MyButton/MyButton";

function ItemDetails({ isShow, handleClose, item }) {
  const [showContent, setShowContent] = useState(false);
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const { addItem, removeItem } = useCart();
  return (
    <>
      <Modal show={isShow} onHide={handleClose} dialogClassName="modal-xl">
        <Modal.Header closeButton>
          {/* <Modal.Title>{item.title.toUpperCase()}</Modal.Title> */}
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

              <BootstrapButton
                onClick={function () {
                  if (item !== undefined || item != null) {
                    addItem(item);
                  }
                }}
              >
                Add to Cart
              </BootstrapButton>
              {/* <Button
                className="mb-3"
                style={{
                  width: "100%",
                  backgroundColor: "#385F4B",
                  borderColor: "#385F4B",
                }}
                onClick={}
              >
               
              </Button> */}
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
                showContent={showContent}
                setShowContent={setShowContent}
                showUnderline={true}
              >
                PRODUCT INFO
              </MyButton>
              <MyButton
                showContent={showContent1}
                setShowContent={setShowContent1}
                showUnderline={true}
              >
                REFUND POLICY
              </MyButton>
              <MyButton
                showContent={showContent2}
                setShowContent={setShowContent2}
                showUnderline={false}
              >
                SHIPPING INFO
              </MyButton>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemDetails;

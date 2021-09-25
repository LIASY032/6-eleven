import React from "react";
import { FormControl, Modal } from "react-bootstrap";
import { useCart } from "../../contexts/CartContainerContext";
import BootstrapButton from "../../components/MyButton/BootstrapButton";
import MyButton from "../../components/MyButton/MyButton";
import { TwoSideContainer } from "../../components/MyContainer";

function ItemDetails({ isShow, handleClose, item }) {
  const { addItem, removeItem } = useCart();
  return (
    <>
      <Modal show={isShow} onHide={handleClose} dialogClassName="modal-xl">
        <Modal.Header closeButton>
          <Modal.Title>
            {item.title ? item.title.toUpperCase() : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TwoSideContainer flexStart={true}>
            <TwoSideContainer.Left>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "100%" }}
              ></img>
            </TwoSideContainer.Left>
            <TwoSideContainer.Right style={{ padding: "5rem" }}>
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

              <BootstrapButton
                onClick={function () {
                  removeItem(item.id);
                }}
              >
                Buy Now
              </BootstrapButton>

              <MyButton
              // showContent={showContent}
              // setShowContent={setShowContent}
              >
                PRODUCT INFO
              </MyButton>
              <MyButton
              // showContent={showContent1}
              // setShowContent={setShowContent1}
              >
                REFUND POLICY
              </MyButton>
              <MyButton
              // showContent={showContent2}
              // setShowContent={setShowContent2}
              >
                SHIPPING INFO
              </MyButton>
            </TwoSideContainer.Right>
          </TwoSideContainer>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemDetails;

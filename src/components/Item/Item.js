import React, { useState } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { useCart } from "../../contexts/CartContainerContext";
// import { useItemDetails } from "../../contexts/ItemDetailsContext";
import { useDispatch } from "react-redux";
import { openItemDetails } from "../../store/actions";

function Item({ item }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  // const { handleOpenModal } = useItemDetails();

  function handleOpenModal() {
    openItemDetails(item, dispatch);
  }

  const { addItem, setAmount } = useCart();
  return (
    <>
      <Card
        style={{ width: "18vw", minWidth: "14rem" }}
        className="text-center margin-top"
      >
        <Card.Img
          variant="top"
          src={item.image}
          style={{ height: "25vh", cursor: "pointer" }}
          onClick={() => handleOpenModal(item)}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <Button
                onClick={() => {
                  if (count > 1) {
                    setCount(count - 1);
                    setAmount(item, count - 1);
                  }
                }}
                variant="outline-secondary"
              >
                -
              </Button>
            </InputGroup.Text>
            <FormControl
              value={count}
              onChange={(e) => {
                let value = e.target.value;

                setCount(value);

                if (value > 0) {
                  setAmount(item, value);
                }
              }}
            />
            <InputGroup.Text>
              <Button
                onClick={() => {
                  setCount(count + 1);

                  setAmount(item, count + 1);
                }}
                variant="outline-secondary"
              >
                +
              </Button>
            </InputGroup.Text>
          </InputGroup>

          <Button
            style={{ backgroundColor: "#385F4B", width: "100%" }}
            onClick={function () {
              if (item !== undefined || item != null) {
                addItem(item, count);
              }
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;

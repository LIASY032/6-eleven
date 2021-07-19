import React, { useState } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { useItemDetails } from "../contexts/ItemDetailsContext";

function Item({ item }) {
  const [count, setCount] = useState(1);
  const { handleOpenModal } = useItemDetails();
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
                    setCount((count) => count - 1);
                  }
                }}
                variant="outline-secondary"
              >
                -
              </Button>
            </InputGroup.Text>
            <FormControl
              aria-label="Amount (to the nearest dollar)"
              value={count}
              onChange={() => {
                setCount(count);
              }}
            />
            <InputGroup.Text>
              <Button
                onClick={() => {
                  setCount((count) => count + 1);
                }}
                variant="outline-secondary"
              >
                +
              </Button>
            </InputGroup.Text>
          </InputGroup>

          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;

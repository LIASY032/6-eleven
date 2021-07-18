import React, { useState } from "react";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";

function Item({ image, title, price }) {
  const [count, setCount] = useState(1);
  return (
    <>
      <Card
        style={{ width: "18vw", minWidth: "14rem" }}
        className="text-center margin-top"
      >
        <Card.Img variant="top" src={image} style={{ height: "25vh" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${price}</Card.Text>
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

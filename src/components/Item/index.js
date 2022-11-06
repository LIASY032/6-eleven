import React from "react";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import "./styles.css";
import { BootstrapButton } from "../MyButton";

function Item({
  ref,
  item,
  handleOpenModal,

  addAmount,
  deleteAmount,
  onClickButton,
  buttonContent,
}) {
  return (
    <>
      <Card className="text-center margin-top each-card">
        <Card.Img
          variant="top"
          src={item.image}
          className="card-img"
          onClick={handleOpenModal}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>${item.price}</Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <Button onClick={deleteAmount} variant="outline-secondary">
                -
              </Button>
            </InputGroup.Text>
            <FormControl value={item.count} ref={ref} />
            <InputGroup.Text>
              <Button onClick={addAmount} variant="outline-secondary">
                +
              </Button>
            </InputGroup.Text>
          </InputGroup>

          <BootstrapButton onClick={onClickButton}>
            {buttonContent}
          </BootstrapButton>
        </Card.Body>
      </Card>
    </>
  );
}

export default React.memo(Item);

import React from "react";
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";
import "./styles.css";
import { BootstrapButton } from "../MyButton/BootstrapButton";

function Item({
  ref,
  item,
  handleOpenModal,
  addItem,
  addAmount,
  deleteAmount,
}) {
  //   const [count, setCount] = useState(1);
  //   const { handleOpenModal } = useItemDetails();
  //   const { addItem, setAmount } = useCart();
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
            <FormControl
              aria-label="Amount (to the nearest dollar)"
              value={item.count}
              ref={ref}
            />
            <InputGroup.Text>
              <Button onClick={addAmount} variant="outline-secondary">
                +
              </Button>
            </InputGroup.Text>
          </InputGroup>

          <BootstrapButton onClick={addItem}>Add to Cart</BootstrapButton>

          {/* <Button
            style={{ backgroundColor: "#385F4B", width: "100%" }}
            onClick={addItem}
          >
            Add to Cart
          </Button> */}
        </Card.Body>
      </Card>
    </>
  );
}

export default Item;

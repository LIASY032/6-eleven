import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../components/Filter";
import Item from "../components/Item";

function ShopPage() {
  return (
    <>
      <Container>
        <Row>
          <h1>Shop</h1>
        </Row>
        <Row>
          <Col xs={3}>
            {" "}
            <Filter></Filter>{" "}
          </Col>
          <Col>
            <Item></Item>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShopPage;

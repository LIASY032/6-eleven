import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Filter from "../statics/Filter";
import Item from "../components/Item/Item";

import Sort from "../components/Filter/Sort";
import data from "../data.json";

function ShopPage() {
  return (
    <>
      <Container>
        <Row>
          <h1>Shop</h1>
        </Row>
        <Row>
          <Col xs={3}>
            <Filter></Filter>
          </Col>
          <Col>
            <Sort />
            <Fade bottom cascade>
              <ul className="products">
                {data.items.map((item, index) => (
                  <li key={index}>
                    <Item item={item}></Item>
                  </li>
                ))}
              </ul>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShopPage;

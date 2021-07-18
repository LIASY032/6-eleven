import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Filter from "../components/Filter";
import Item from "../components/Item";
import ItemDetails from "../components/ItemDetails";
import Sort from "../components/Sort";
import data from "../data.json";

function ShopPage() {
  const [isShow, setIsShow] = useState(true);

  function handleClose() {
    setIsShow(!isShow);
  }

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
                    <Item
                      price={item.price}
                      image={item.image}
                      title={item.title}
                    ></Item>
                  </li>
                ))}
              </ul>
            </Fade>
            <ItemDetails
              isShow={isShow}
              handleClose={handleClose}
            ></ItemDetails>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShopPage;

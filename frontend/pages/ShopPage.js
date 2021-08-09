import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import Filter from "../statics/Filter";
import Item from "../components/Item/Item";

import Sort from "../components/Selector/Sort";
import data from "../data.json";
import { TwoSideContainer } from "../components/MyContainer";

function ShopPage() {
  return (
    <>
      <h1>Shop</h1>

      <TwoSideContainer flexStart={true}>
        <TwoSideContainer.Left notHalf={true}>
          <Filter></Filter>
        </TwoSideContainer.Left>
        <TwoSideContainer.Right>
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
        </TwoSideContainer.Right>
      </TwoSideContainer>
      {/* <Col xs={3}></Col>
          <Col></Col> */}
    </>
  );
}

export default ShopPage;

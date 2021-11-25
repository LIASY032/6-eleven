import React from "react";
import { Container, Row } from "react-bootstrap";
import Carousel from "react-elastic-carousel";
import Item from "../components/Item/Item";
function WeeklyDeal({ items }) {
  return (
    <>
      <Container className="bottom-gap common-container extra-padding-bottom">
        <Row>
          <h1>Weekly Deals</h1>
        </Row>
        <Row>
          <Carousel itemsToShow={3}>
            {items &&
              items.map(function (item, i) {
                if (item.weeklyDeal) {
                  return <Item key={i} item={item}></Item>;
                }
              })}
          </Carousel>
        </Row>
      </Container>
    </>
  );
}

export default WeeklyDeal;

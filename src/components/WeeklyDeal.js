import React from "react";
import { Container, Row } from "react-bootstrap";

import { useSelector } from "react-redux";

function WeeklyDeal() {
  const items = useSelector((state) => state.items.items);
  return (
    <>
      {items ? items[0]._id : ""}
      <Container className="bottom-gap common-container extra-padding-bottom">
        <Row>
          <h1>Weekly Deals</h1>
        </Row>
        <Row>updating</Row>
      </Container>
    </>
  );
}

export default WeeklyDeal;

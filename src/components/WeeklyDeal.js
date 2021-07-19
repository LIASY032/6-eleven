import React from "react";
import { Container, Row } from "react-bootstrap";
import { Flip } from "react-reveal";

function WeeklyDeal() {
  return (
    <>
      <Flip left>
        <Container className="bottom-gap common-container extra-padding-bottom">
          <Row>
            <h1>Weekly Deals</h1>
          </Row>
          <Row>updating</Row>
        </Container>
      </Flip>
    </>
  );
}

export default WeeklyDeal;

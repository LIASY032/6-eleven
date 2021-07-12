import React from "react";
import { Container, Row } from "react-bootstrap";
import { Flip } from "react-reveal";
import ThreeDCarousel from "../components/ThreeDCarousel";

function WeeklyDeal() {
  return (
    <>
      <Flip left>
        <Container className="bottom-gap common-container extra-padding-bottom">
          <Row>
            <h1>Weekly Deals</h1>
          </Row>
          <Row>
            <ThreeDCarousel></ThreeDCarousel>
          </Row>
        </Container>
      </Flip>
    </>
  );
}

export default WeeklyDeal;

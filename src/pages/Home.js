import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bag, ExclamationCircle } from "react-bootstrap-icons";

import { Fade } from "react-reveal";
import WeeklyDeal from "../statics/WeeklyDeal";
import SlideShow from "../components/MyCarousel";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((state) => state.items.items);
  return (
    <>
      <Fade top>
        <Container className="margin-top">
          <SlideShow></SlideShow>
        </Container>
      </Fade>

      <WeeklyDeal items={items}></WeeklyDeal>

      {/* <Container
        className="margin-top common-container"
        style={{ backgroundColor: "white" }}
      >
        <Fade bottom cascade={true}>
          <Row>
            <Col>
              <Item></Item>
            </Col>
            <Col>
              <Item></Item>
            </Col>
            <Col>
              <Item></Item>
            </Col>
            <Col>
              <Item></Item>
            </Col>
          </Row>
        </Fade>
      </Container> */}

      <Container className="margin-top">
        <Row className="justify-content-md-center">
          <Col className="right-gap">
            <Bag size="70"></Bag>
            <h1>Pick Up Options</h1>
            <p>
              You can choose the products online then choose a time for picking
              products
            </p>
          </Col>
          <Col>
            <ExclamationCircle size="70"></ExclamationCircle>
            <h1>Health & Safety Rules</h1>
            <p>Be careful, if you are sick, please wearing a mask</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

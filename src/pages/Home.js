import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Bag, ExclamationCircle } from "react-bootstrap-icons";
import Item from "../components/Item";
import { Fade } from "react-reveal";
import WeeklyDeal from "../components/WeeklyDeal";

function Home() {
  return (
    <>
      <Fade top>
        <Container className="margin-top">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/example1.webp"
                alt="First slide"
                style={{ height: "70vh" }}
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/example2.jpeg"
                alt="Second slide"
                style={{ height: "70vh" }}
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Fade>

      <WeeklyDeal></WeeklyDeal>

      <Container
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
      </Container>

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

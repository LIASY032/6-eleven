import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { Bag, ExclamationCircle } from "react-bootstrap-icons";
import Item from "../components/Item";
import { Fade, Flip } from "react-reveal";

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
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item> */}
          </Carousel>
        </Container>
      </Fade>

      <Flip left>
        <Container>
          <h1>Weekly Deals</h1>
          <Carousel>
            <Carousel.Item>
              <Item></Item>
            </Carousel.Item>
            <Carousel.Item>
              <Item></Item>
            </Carousel.Item>
            <Carousel.Item>
              <Item></Item>
            </Carousel.Item>
            <Carousel.Item>
              <Item></Item>
            </Carousel.Item>
            <Carousel.Item>
              <Item></Item>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Flip>

      <Container className="margin-top common-container">
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

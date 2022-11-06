import React from "react";
import { Carousel } from "react-bootstrap";
import first from "../../assets/images/first.jpg";
import second from "../../assets/images/second.jpg";
function SlideShow({ showItems }) {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={first}
            alt="First slide"
            style={{ height: "70vh" }}
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={second}
            alt="Second slide"
            style={{ height: "70vh" }}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default React.memo(SlideShow);

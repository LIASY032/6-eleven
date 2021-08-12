import React from "react";
import { Carousel } from "react-bootstrap";
function SlideShow({ showItems }) {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/ad420a_f2ae964f4e3d4bb8af8b6cdda0ad86bd~mv2.jpg/v1/fill/w_2220,h_1202,q_90/ad420a_f2ae964f4e3d4bb8af8b6cdda0ad86bd~mv2.webp"
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
            src="https://i0.wp.com/www.nomadwomen.com/wp-content/uploads/2020/01/mexican-supermarket-salsa.jpg?w=1500"
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

export default SlideShow;

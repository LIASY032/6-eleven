import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import Item from "./Item";

function ThreeDCarousel() {
  const [slideState, setSilderState] = useState({
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  });
  const slides = [
    {
      key: uuidv4(),
      content: <Item></Item>,
    },
    {
      key: uuidv4(),
      content: <Item></Item>,
    },
    {
      key: uuidv4(),
      content: <Item></Item>,
    },
    {
      key: uuidv4(),
      content: <Item></Item>,
    },
    {
      key: uuidv4(),
      content: <Item></Item>,
    },
  ].map((slide, index) => {
    return {
      ...slide,
      onClick: ( ) => {
        setSilderState({ ...slideState, goToSlide: index });
      },
    };
  });

//   useEffect(() => {
//     setTimeout(
//       () =>
//         setSilderState({ ...slideState, goToSlide: slideState.goToSlide + 1 }),
//       3000
//     );
//   }, [slideState]);

  return (
    <div style={{ width: "80vw", height: "50vh", margin: "0 auto" }}>
      <Carousel
        slides={slides}
        goToSlide={slideState.goToSlide}
        offsetRadius={2}
        showNavigation={true}
        animationConfig={slideState.config}
      />
    </div>
  );
}

export default ThreeDCarousel;

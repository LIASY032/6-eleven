import React, { useState } from "react";

import { Container, Row } from "react-bootstrap";
import { MyButton, BootstrapButton } from "../components/MyButton";

function Filter() {
  const [isFilter, setIsFilter] = useState(false);

  const [showContent, setShowContent] = useState(false);

  // const sortingList = ["All", "Produce", "daily", "bread", "goods"];

  return (
    <>
      <Container>
        <Row style={{ borderBottomStyle: "solid" }}>
          <h3>Filter by</h3>
        </Row>
        <Row>
          <MyButton showContent={showContent} setShowContent={setShowContent}>
            Collection
          </MyButton>
        </Row>
        <Row>
          <MyButton showContent={showContent} setShowContent={setShowContent}>
            Price
          </MyButton>
        </Row>

        <Row className="padding-topAnddown">
          {isFilter ? (
            <BootstrapButton
              onClick={function () {
                setIsFilter(false);
              }}
            >
              Clear filters
            </BootstrapButton>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </>
  );
}

export default Filter;

import React, { useState } from "react";
import {} from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { MyButton, BootstrapButton } from "../components/MyButton";
import Selector from "../components/Filter/Selector";

function Filter() {
  const [isFilter, setIsFilter] = useState(false);
  const [collectionValue, setCollectionValue] = useState(0);
  const [price, setPrice] = useState(100);
  const [showContent, setShowContent] = useState(false);

  const sortingList = ["All", "Produce", "daily", "bread", "goods"];

  function sortOnChange(e) {
    setCollectionValue(e.target.value);
  }
  return (
    <>
      <Container>
        <Row style={{ borderBottomStyle: "solid" }}>
          <h3>Filter by</h3>
        </Row>
        <Row>
          <MyButton
            showContent={showContent}
            setShowContent={setShowContent}
            showUnderline={true}
          >
            Collection
            {/* <Selector value={collectionValue} onChange={sortOnChange}>
              {sortingList}
            </Selector> */}
          </MyButton>
        </Row>
        <Row>
          <MyButton
            showContent={showContent}
            setShowContent={setShowContent}
            showUnderline={true}
          >
            Price
            {/* <input
              type="range"
              min="1"
              max="100"
              value={price}
              onChange={function (e) {
                setPrice(e.target.value);
                setIsFilter(true);
              }} */}
            {/* /> */}
          </MyButton>
        </Row>

        <Row className="padding-topAnddown">
          {isFilter ? (
            <BootstrapButton
              onClick={function () {
                setIsFilter(false);
                setCollectionValue("All");
                setPrice(100);
              }}
            >
              Clear filters{" "}
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

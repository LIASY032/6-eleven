import React, { useState } from "react";
import {} from "react-bootstrap";
import { Container, Row, Button } from "react-bootstrap";
import MyButton from "./MyButton";

function Filter() {
  const [isFilter, setIsFilter] = useState(false);
  const [collectionValue, setCollectionValue] = useState("All");
  const [price, setPrice] = useState(100);
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Container>
        <Row style={{ borderBottomStyle: "solid" }}>
          <h3>Filter by</h3>
        </Row>
        <Row>
          <MyButton
            buttonContent="Collection"
            showContent={showContent}
            setShowContent={setShowContent}
            showUnderline={true}
          >
            <select
              value={collectionValue}
              onChange={function (e) {
                setCollectionValue(e.target.value);
                setIsFilter(true);
              }}
            >
              <option value="All">All</option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy & Eggs</option>
              <option value="bread">Bread & Grains</option>
              <option value="goods">Household Goods</option>
            </select>
          </MyButton>
        </Row>
        <Row>
          <MyButton
            buttonContent="Price"
            showContent={showContent}
            setShowContent={setShowContent}
            showUnderline={true}
          >
            <input
              type="range"
              min="1"
              max="100"
              value={price}
              onChange={function (e) {
                setPrice(e.target.value);
                setIsFilter(true);
              }}
            />
            <p>${price}</p>
          </MyButton>
        </Row>
        <Row className="padding-topAnddown">
          {isFilter ? (
            <Button
              onClick={function () {
                setIsFilter(false);
                setCollectionValue("All");
                setPrice(100);
              }}
              style={{
                width: "100%",
                backgroundColor: "#385F4B",
                borderColor: "#385F4B",
              }}
            >
              Clear filters{" "}
            </Button>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </>
  );
}

export default Filter;

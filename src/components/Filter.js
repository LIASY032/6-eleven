import React, { useState } from "react";
import {} from "react-bootstrap";
import { Container, Row, FormControl, Form } from "react-bootstrap";

function Filter() {
  const [isFilter, setIsFilter] = useState(false);

  return (
    <>
      <Container>
        <Row style={{ borderBottomStyle: "solid" }}>
          <h3>Filter by</h3>
        </Row>
        <Row style={{ borderBottomStyle: "solid" }}>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
          </Form>
        </Row>
        <Row style={{ borderBottomStyle: "solid" }}></Row>
        <Row></Row>
      </Container>
    </>
  );
}

export default Filter;

import React, { useState } from "react";

import { Container, Row, Accordion, Card, Button } from "react-bootstrap";
import { MyButton, BootstrapButton } from "../components/MyButton";

function Filter() {
  const sortingList = ["All", "Produce", "daily", "bread", "goods"];

  return (
    <>
      <Container>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={MyButton} eventKey="0">
                Collections
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {sortingList.map(function (item, index) {
                  return (
                    <p key={index}>
                      {item}
                      <br />
                    </p>
                  );
                })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={MyButton} eventKey="1">
                Price
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </>
  );
}

export default Filter;

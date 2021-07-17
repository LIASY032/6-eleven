import React, { useState } from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Cart, Shop } from "react-bootstrap-icons";
import { useIsLogin } from "../contexts/LoginContext";
import Logging from "./Logging";
function Navigation() {
  const [cart, setCart] = useState(0);
  const { setIsChange } = useIsLogin();
  return (
    <>
      <Navbar bg="success" expand="lg" sticky="top" variant="dark">
        <Navbar.Brand href="/">
          <Shop></Shop> Six Eleven
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/shop">Shop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contace">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
          <Nav.Item>
            {" "}
            <Nav.Link href="/cart">
              {" "}
              <Cart size={30} style={{ color: "yellow" }}></Cart>
              {cart}
            </Nav.Link>{" "}
          </Nav.Item>
          <Button
            onClick={function () {
              setIsChange(1);
            }}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;

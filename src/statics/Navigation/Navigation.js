import React from "react";
import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { PersonCircle, Search, Shop } from "react-bootstrap-icons";

import { useIsLogin } from "../../contexts/LoginContext";
import ShoppingCartLogo from "../../components/assets/ShoppingCartLogo";

function Navigation() {
  const { setIsChange } = useIsLogin();
  return (
    <>
      <Navbar bg="success" expand="lg" sticky="top" variant="dark">
        <Navbar.Brand href="/">
          <Shop size={30}></Shop> Six Eleven
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
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <InputGroup.Text>
                <Search></Search>
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <Nav.Item>
            <Nav.Link href="/cart">
              <ShoppingCartLogo></ShoppingCartLogo>
            </Nav.Link>
          </Nav.Item>
          <Button
            onClick={function () {
              setIsChange(1);
            }}
          >
            <PersonCircle size={20}></PersonCircle> Login in
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;

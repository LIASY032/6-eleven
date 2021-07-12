import "./App.css";
import React, {useState} from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import ShopPage from "./pages/ShopPage";
import { Cart, Shop } from "react-bootstrap-icons";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [cart, setCart] = useState(0);

  
  return (
    <div className="App">
      <>
       
        <Router>
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
                  <Nav.Link href="/contace">
                    Contact
                  </Nav.Link>
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
            <Nav.Item> <Nav.Link href="/cart"> <Cart></Cart>{cart}</Nav.Link> </Nav.Item>
            </Navbar.Collapse>
           
          </Navbar>

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/shop" component={ShopPage}></Route>
          </Switch>
        </Router>
      </>

      <Footer></Footer>

     
    </div>
  );
}

export default App;

import "./App.css";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import ShopPage from "./pages/ShopPage";
import { Cart, Shop } from "react-bootstrap-icons";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        {/* <div className="logo">
          <Shop></Shop> Six Eleven
        </div> */}
        {/* <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav> */}

        <Router>
          <Navbar bg="success" expand="lg" sticky="top" variant="dark">
            <Navbar.Brand href="#">
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
                  <Nav.Link eventKey="link-2">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
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
              <Cart></Cart>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/shop" component={ShopPage}></Route>
          </Switch>
        </Router>
      </>

      <Footer></Footer>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

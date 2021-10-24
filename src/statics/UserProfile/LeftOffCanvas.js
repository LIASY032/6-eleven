import React from "react";
import { Button, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions";

function LeftOffCanvas() {
  const dispatch = useDispatch();
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        hi
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5>Offcanvas top</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Row>
            <ListGroup variant="flush">
              <ListGroup.Item>Your Order</ListGroup.Item>
              <ListGroup.Item>History</ListGroup.Item>
            </ListGroup>
          </Row>
          <Row>
            <Button
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => {
                logOut(dispatch);
              }}
            >
              Log out
            </Button>
          </Row>
        </div>
      </div>
    </>
  );
}

export default LeftOffCanvas;

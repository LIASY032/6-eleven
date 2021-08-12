import React from "react";
import { useRef } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useCart } from "../../contexts";
import { BootstrapInput } from "../../components/Input";
import { BootstrapButton } from "../../components/MyButton";
import { useResigeration } from "../../contexts";
import { useIsLogin } from "../../contexts/LoginContext";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions";

function Logging() {
  const { carts } = useCart();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { islogin, setIsChange } = useIsLogin();
  const { setIsRegisteration } = useResigeration();
  const dispatch = useDispatch();
  function handleClose() {
    setIsChange(0);
  }

  function handleLogin() {
    userLogin(
      emailRef.current.value,
      passwordRef.current.value,
      carts,
      dispatch
    );
  }

  return (
    <>
      <Modal show={islogin === 1 ? true : false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN IN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <BootstrapInput
              ref={emailRef}
              childrenlabel="Email address"
              type="email"
              textMuted="We'll never share your email with anyone else."
            ></BootstrapInput>
            <BootstrapInput
              ref={passwordRef}
              childrenlabel="Password"
              type="password"
            ></BootstrapInput>

            <BootstrapButton onClick={handleLogin}>Login</BootstrapButton>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={() => {
              handleClose();
              setIsRegisteration(1);
            }}
            style={{ width: "100%" }}
          >
            Create Account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Logging;

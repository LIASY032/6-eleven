import React from "react";
import { useRef } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useCart } from "../../contexts";
import { BootstrapInput } from "../../components/Input";
import { BootstrapButton } from "../../components/MyButton";
// import { useRegistration } from "../../contexts";
// import { useIsLogin } from "../../contexts/LoginContext";
import { useDispatch } from "react-redux";
import { userLogin } from "../../store/actions";

function Logging({ handleClose, isShow, moveToRegistration }) {
  const { carts } = useCart();
  const emailRef = useRef();
  const passwordRef = useRef();
  // const { islogin, setIsChange } = useIsLogin();
  // const { setIsRegistration } = useRegistration();
  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();
    if (passwordRef.current.value.length < 5) {
      alert("Please enter at least 5 characters");
    } else {
      handleClose();
      userLogin(
        emailRef.current.value.replace(/\s+/g, ""),
        passwordRef.current.value,
        carts,
        dispatch
      );
    }
  }

  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <BootstrapInput
              ref={emailRef}
              childrenlabel="Email address"
              type="email"
              name="email"
              required
              textMuted="We'll never share your email with anyone else."
            ></BootstrapInput>
            <BootstrapInput
              ref={passwordRef}
              childrenlabel="Password"
              type="password"
              name="password"
              required
            ></BootstrapInput>

            <BootstrapButton type="submit">Login</BootstrapButton>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={() => {
              moveToRegistration();
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

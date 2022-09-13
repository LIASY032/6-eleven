import React from "react";
import { useRef } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useCart } from "../../contexts";
import { BootstrapInput } from "../../components/Input";
import { BootstrapButton } from "../../components/MyButton";

import { useDispatch } from "react-redux";
import { googleLogin, userLogin } from "../../store/actions";
import GoogleLogin from "react-google-login";
import { testToken } from "../../services";
// TODO: Refactor
function Logging({ handleClose, isShow, moveToRegistration }) {
  const { carts } = useCart();
  const emailRef = useRef();
  const passwordRef = useRef();

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

  // TODO: send to backend
  const responseGoogle = async (response) => {
    handleClose();
    await googleLogin(response.tokenId, carts, dispatch);
  };
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
              required
            ></BootstrapInput>
            <BootstrapInput
              ref={passwordRef}
              childrenlabel="Password"
              type="password"
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

          {/* TODO */}
          <GoogleLogin
            clientId="582665885689-tnatv6co4tksh30md29u6844o2spioun.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <Button
            onClick={async () => {
              await testToken();
            }}
          >
            sdassda
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Logging;

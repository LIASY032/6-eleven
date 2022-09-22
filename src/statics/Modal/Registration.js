import React from "react";
import { Form, Modal, Alert } from "react-bootstrap";
import { BootstrapInput } from "../../components/Input";
import { BootstrapButton } from "../../components/MyButton";

import { useDispatch } from "react-redux";
import { useCart } from "../../contexts";

import { userRegistration } from "../../store/actions";
function Registration({ isShow, handleClose }) {
  const { carts } = useCart();
  // const { isRegistration, setIsRegistration } = useRegistration();
  const [show, setShow] = React.useState(false);
  const name = React.useRef();
  const email = React.useRef();
  const password = React.useRef();
  const confirm = React.useRef();
  const [errorMessage, setErrorMessage] = React.useState("");

  const dispatch = useDispatch();
  async function handleSubmit() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.current.value.match(mailformat)) {
      setShow(true);
      setErrorMessage("You have entered an invalid email address!");
      email.current.focus();
    } else {
      if (password.current.value != confirm.current.value) {
        setShow(true);
        setErrorMessage("Your password is inconsistent.");
        password.current.focus();
      } else {
        await userRegistration(
          name.current.value,
          email.current.value,
          password.current.value,
          carts,
          dispatch
        );
      }
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }, [show]);

  return (
    <>
      <Modal show={isShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTRATION</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <BootstrapInput ref={name} childrenlabel="Name"></BootstrapInput>
            <BootstrapInput
              ref={email}
              childrenlabel="Email address"
              type="email"
              textMuted="We'll never share your email with anyone else."
            ></BootstrapInput>
            <BootstrapInput
              ref={password}
              childrenlabel="Password"
              type="password"
            ></BootstrapInput>
            <BootstrapInput
              ref={confirm}
              childrenlabel="Confirm Password"
              type="password"
            ></BootstrapInput>

            <BootstrapButton onClick={handleSubmit}>Register</BootstrapButton>
          </Form>
        </Modal.Body>
        <Alert
          style={{ position: "fixed", left: "0", width: "100%", top: "0" }}
          variant="danger"
          onClose={() => setShow(false)}
          show={show}
        >
          <Alert.Heading>An Error Occur</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      </Modal>
    </>
  );
}

export default Registration;

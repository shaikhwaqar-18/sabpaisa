import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Help from './Help';
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-primary" closeButton>
        <Modal.Title className="text-white" id="contained-modal-title-vcenter">
          Help!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img
            className="search_logo img-responsive"
            src="../assets/search.jpg"
          ></img>
          <input
            className="w-50"
            type="text"
            placeholder="How can we help?"
          ></input>
        </div>
        <div className="d-flex justify-content-center">
          {" "}
          <a
            className="condition"
            href="https://www.zendesk.com/in/embeddables/?utm_campaign=image&utm_medium=poweredbyzendesk&utm_source=webwidget#georedirect"
          >
            zendesk
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Login() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar className="mb-5" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="../assets/sabPaisa.png"
              width="144"
              height="40"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div className="container">
        <div style={{ marginTop: "15rem" }}>
          <div className="ready__started-box m-5">
            <form className="main__form">
              <div className="row">
                <div className="col-md-6  mx-auto">
                  <h1 className="text-center">Welcome back!</h1>
                  <h4 className="text-center">
                    Login to see your assessment status
                  </h4>
                  <div className="form-group border border-secondary rounded">
                    <input
                      type="text"
                      className="form-control is-invalid"
                      id="validationServer01"
                      aria-describedby="firstName"
                      placeholder="e.g mary@gmail.com"
                      required
                    />
                    <label for="validationServer01">Your email</label>
                  </div>
                  <Button
                    className="fs-2 form-control"
                    variant="dark"
                    type="submit"
                  >
                    Email me a link to login
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="footer_login">
            <div className="row">
              <div className="col-md-6 col-sm-6 mbl-res">
                <h6 className="h6 mb-0">Powered by</h6>
                <h1 className="h1">
                  <em>vervoe</em>
                </h1>
              </div>

              <div className="col-md-6 col-sm-6 d-flex justify-content-end">
                <Button
                  className="mbl-res"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  <i className="fa-sharp fa-solid fa-circle-question p-2"></i>
                  Help
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="help_icon">
        <Help></Help>
      </div>
    </>
  );
}

export default Login;

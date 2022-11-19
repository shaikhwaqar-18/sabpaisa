import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Help from "./Help";

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

function Homepage() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Navbar className="mb-5" bg="white" variant="dark">
        <Container>
          <Navbar.Brand href="/Login">
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
        <div className="ready__started-box">
          <form className="main__form">
            <div className="row d-block">
              <div className="col-md-6 mx-auto">
                <h1 className="h1 mt-5">React Js</h1>
                <div className="form-group  border border-secondary rounded mt-5">
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServer03"
                    aria-describedby="firstName"
                    placeholder="e.g Mary Smith"
                    required
                  />
                  <label for="validationServer03">First Name</label>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="form-group  border border-secondary rounded ">
                  <input
                    type="text"
                    className="form-control is-invalid "
                    id="validationServer04"
                    aria-describedby="firstName"
                    placeholder="e.g mary@gmail.com"
                    required
                  />
                  <label for="validationServer04">Email address</label>
                </div>
              </div>
              <div className="col-md-6 mx-auto mt-5">
                <div className="form-group">
                  <div className="form-check">
                    <input
                      style={{ width: "20px", marginTop: "-28px" }}
                      type="checkbox"
                      value=""
                      id="invalidCheck3"
                      required
                    ></input>
                    <label
                      className="form-check-label"
                      for="invalidCheck3"
                      style={{ color: "black" }}
                    >
                      I agree to the{" "}
                      <a
                        className="condition"
                        href="https://vervoe.com/terms-of-use/"
                      >
                        <strong>Terms and Conditions</strong>
                      </a>
                    </label>
                    <div className="invalid-feedback">
                      You must agree before submitting.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ">
              <button
                className="btn btn-secondary btn-lg  fs-2  col-md-6 mx-auto "
                variant="dark"
                type="submit"
              >
                Apply Now
              </button>
            </div>
          </form>
          <div className="footer">
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

export default Homepage;

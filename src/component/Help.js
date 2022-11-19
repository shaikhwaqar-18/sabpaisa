import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Help() {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button
          key={idx}
          className="me-2 mb-2 rounded-circle"
          onClick={() => handleShow(v)}
        >
          <i className="fa-sharp fa-solid fa-circle-question p-0 fs-1"></i>
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title className="text-white">Help</Modal.Title>
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
      </Modal>
    </>
  );
}

export default Help;

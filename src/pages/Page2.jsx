import { useNavigate } from "react-router-dom"; // Helps with navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //importing font awsome
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; //importing the icon i want to use

import React, { useState } from "react";
import { Form } from "react-bootstrap"; // Import Form from react-bootstrap

// window form START
function WindowForm({ onSubmit }) {
  const [numWindows, setNumWindows] = useState("");
  const [frameColor, setFrameColor] = useState("");
  const [glassColor, setGlassColor] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(numWindows, frameColor, glassColor);
  };

  return (
    <Form onSubmit={submitForm} className="form">
      <Form.Group className="mb-3">
        <Form.Label>Numero di finestre</Form.Label>
        <Form.Control
          type="number"
          placeholder="inserisci un numero"
          value={numWindows}
          onChange={(e) => setNumWindows(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Colore del frame</Form.Label>
        <Form.Control
          type="text"
          placeholder="inserisci un colore frame"
          value={frameColor}
          onChange={(e) => setFrameColor(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Colore del vetro </Form.Label>
        <Form.Control
          type="text"
          placeholder="inserisci un colore vetro"
          value={glassColor}
          onChange={(e) => setGlassColor(e.target.value)}
          required
        />
      </Form.Group>

      <button className="btn btn-primary" type="submit">
        Invia
      </button>
    </Form>
  );
}
// window form END

function Page2() {
  const navigate = useNavigate();

  const handleNavigateToOutput = () => {
    navigate("/page3");
  };

  const handleFormSubmit = (numWindows, frameColor, glassColor) => {
    // Store the values in local storage
    localStorage.setItem("initialNumber", numWindows);
    localStorage.setItem("initialColor", frameColor);
    localStorage.setItem("initialColor2", glassColor);
    // Optionally navigate to the output page here
    handleNavigateToOutput();
  };

  return (
    <>
      <WindowForm onSubmit={handleFormSubmit} />
      <div className="nav-buttons">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => {
            navigate("/page1");
          }}
        />

        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => {
            navigate("/page3");
          }}
        />
      </div>
    </>
  );
}

export default Page2;

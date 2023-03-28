import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useAuth0 } from "@auth0/auth0-react";
import "./ModalToAdd.css";

export default function ModalToAdd(props) {
  const [weeksDays, setWeeksDay] = useState("");
  const { user } = useAuth0();
  const addexercise = async () => {
    try {
      const article = {
        exerciseName: props.clickedCardData.name,
        gifUrl: props.clickedCardData.gifUrl,
        bodyPart: props.clickedCardData.bodyPart,
        targetMuscle: props.clickedCardData.target,
        equipment: props.clickedCardData.equipment,
        weeksDay: weeksDays,
      };
      const dataWait = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/addExerciseForOneUser/${user.email}`,
        article
      );
      props.onHide();
      setWeeksDay("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    props.onHide();
  };

  return (
    <>
      <Modal show={props.modalShow} onHide={props.onHide} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.clickedCardData.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "600px" }}>
          <div className="img">
            <img
              src={props.clickedCardData.gifUrl}
              style={{ height: "505px", width: "450px" }}
            />
          </div>
          <div className="details">
            <h3> Exercise Name: {props.clickedCardData.name}</h3>
            <p>
              Exercises keep you strong. {props.clickedCardData.name} is one of
              the best exercises to target your {props.clickedCardData.target}.
              It will help you improve your mood and gain energy.
            </p>
            <p> Body Part: {props.clickedCardData.bodyPart}</p>
            <p> Target Muscle: {props.clickedCardData.target}</p>
            <p> Used Equipment: {props.clickedCardData.equipment}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" disabled={!weeksDays} onClick={addexercise}>
            add to
          </Button>
          <div className="dropdown-container">
            <Form.Select
              className="dropdown-select"
              value={weeksDays}
              onChange={(ev) => {
                setWeeksDay(ev.target.value);
              }}
            >
              <option value="">Select a day</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </Form.Select>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function ModalToAdd(props) {
  const [weeksDays, setWeeksDay] = useState("")
  const addexercise = async () => {
    try {
        const article = {
        exerciseName: props.clickedCardData.exerciseName,
        gifUrl: props.clickedCardData.gifUrl,
        bodyPart: props.clickedCardData.bodyPart,
        targetMuscle: props.clickedCardData.targetMuscle,
        equipment: props.clickedCardData.equipment,
        weeksDay: weeksDays
      };
      const dataWait = await axios.post(`${process.env.REACT_APP_SERVER_URL}/addExerciseForOneUser/:email`, article)
    }
    catch (error) {
      console.log(error);
    }
  }


  const handleClose = () => {
    props.onHide();
  }

  return (
    <>
      <Modal show={props.modalShow} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{props.clickedCardData.exerciseName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <image src={props.clickedCardData.gifUrl} />
          <h3> {props.clickedCardData.bodyPart}</h3>
          <p> {props.clickedCardData.targetMuscle}</p>
          <p> {props.clickedCardData.equipment}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addexercise}>
            add to
          </Button>
          <Form.Group className="mb-3" >
            <Form.Label >WeeksDay</Form.Label>
            <Form.Control as="textarea" rows={3} value={weeksDays} onChange={(ev) => {
              setWeeksDay(ev.target.value)
            }} />

          </Form.Group>

        </Modal.Footer>
      </Modal>
    </>
  );

  ;
}

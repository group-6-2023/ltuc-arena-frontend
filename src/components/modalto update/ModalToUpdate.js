import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ModalToUpdate.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function ModalToUpdate({ clicked, show, onHide, setfavArr }) {
  const [weekDay, setWeekDay] = useState("");

  const updateReq = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/updateExercise/${clicked.exerciseid}`;
    const obj = {
      weeksDay: weekDay,
    };
    const { data } = axios.put(url, obj);
    setfavArr(data);
    onHide();
  };

  const deleteReq = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/deleteExercise/${clicked.exerciseid}`;
    const { data } = axios.delete(url);
    setfavArr(data);
    onHide();
  };

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        centered
        style={{ width: "60%", margin: "0 20%" }}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#130d2e", color: "white" }}
        >
          <Modal.Title> Exercise Name : {clicked.exercisename}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={clicked.gifurl} style={{ width: "30%", height: "300px" }} />
          <div className="dropdown-div">
            <p>
              <span className="bold-modal">Exercise Name : </span>
              {clicked.exercisename}
            </p>
            <p>
              <span className="bold-modal">Body Part:</span> {clicked.bodypart}
            </p>

            <p>
              {" "}
              <span className="bold-modal">Target Muscle:</span>{" "}
              {clicked.targetmuscle}
            </p>

            <p>
              {" "}
              <span className="bold-modal">Used Equipment:</span>{" "}
              {clicked.equipment}
            </p>
            <p style={{ opacity: "0.5" }}>
              You can change the week day for your exercise
            </p>
            <Form.Select
              className="dropdown-update"
              defaultValue={clicked.weeksday}
              onChange={(ev) => {
                setWeekDay(ev.target.value);
              }}
            >
              <option value="">Select a day</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
            </Form.Select>
          </div>
        </Modal.Body>
        <Modal.Footer className="edit-modal">
          <div>
            <Button variant="danger" onClick={deleteReq}>
              Delete
            </Button>
          </div>
          <div>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={updateReq}
              style={{ backgroundColor: "#130d2e" }}
            >
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

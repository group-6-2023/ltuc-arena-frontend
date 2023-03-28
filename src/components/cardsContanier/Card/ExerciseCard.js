import { useState } from "react";
import "./ExerciseCard.css";
import Col from "react-bootstrap/Col";
import ModalToUpdate from "../../modalto update/ModalToUpdate";

export default function ExerciseCard({
  setClickedCardData,
  setModalShow,
  exercise,
  isList,
  setfavArr,
}) {
  const [clicked, setClicked] = useState({});
  const [show, setShow] = useState(false);
  return (
    <>
      <Col>
        <div>
          <div className="exCard">
            <div className="circle"></div>
            <div className="cardContent">
              <h3 className="exName">
                {isList ? exercise.exercisename : exercise.name}
              </h3>

              <h3 className="exBody">
                {isList ? exercise.bodypart : exercise.bodyPart}
              </h3>

              <p>{isList ? exercise.targetmuscle : exercise.target}</p>

              <p>{exercise.equipment}</p>
              {isList ? (
                <div>
                  <a
                    onClick={() => {
                      setClicked(exercise);
                      setShow(true);
                    }}
                  >
                    EDIT
                  </a>
                </div>
              ) : (
                <a
                  onClick={() => {
                    setClickedCardData(exercise);
                    setModalShow(true);
                  }}
                >
                  ADD
                </a>
              )}
            </div>
            <img
              className="exImg"
              src={isList ? exercise.gifurl : exercise.gifUrl}
            />
          </div>
        </div>
        <ModalToUpdate
          setfavArr={setfavArr}
          clicked={clicked}
          show={show}
          onHide={() => {
            setShow(false);
          }}
        />
      </Col>
    </>
  );
}

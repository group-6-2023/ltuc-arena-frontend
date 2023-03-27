import React from "react";
import "./ExerciseCard.css";
import Col from "react-bootstrap/Col";

export default function ExerciseCard({
  setClickedCardData,
  setModalShow,
  exercise,
}) {
  return (
    <Col>
      <div>
        <div className="exCard">
          <div className="circle"></div>
          <div className="cardContent">
            <h3 className="exName">{exercise.name}</h3>

            <h3 className="exBody">{exercise.bodyPart}</h3>

            <p>{exercise.target}</p>

            <p>{exercise.equipment}</p>

            <a
              onClick={() => {
                setClickedCardData(exercise);
                setModalShow(true);
              }}
            >
              ADD
            </a>
          </div>
          <img className="exImg" src={exercise.gifUrl} />
        </div>
      </div>
    </Col>
  );
}

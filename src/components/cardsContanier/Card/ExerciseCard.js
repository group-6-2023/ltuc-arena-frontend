import React from "react";
import "./ExerciseCard.css";
import Col from "react-bootstrap/Col";

export default function ExerciseCard({
  setClickedCardData,
  setModalShow,
  exercise,
  isList,
}) {
  return (
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

            <a
              onClick={() => {
                setClickedCardData(exercise);
                setModalShow(true);
              }}
            >
              ADD
            </a>
          </div>
          <img
            className="exImg"
            src={isList ? exercise.gifurl : exercise.gifUrl}
          />
        </div>
      </div>
    </Col>
  );
}

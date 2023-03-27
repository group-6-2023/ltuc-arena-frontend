import React from "react";

export default function ExerciseCard({
  setClickedCardData,
  setModalShow,
  exercise,
}) {
  return (
    <div
      onClick={() => {
        setClickedCardData(exercise);
        setModalShow(true);
      }}
    >
      ExerciseCard
    </div>
  );
}

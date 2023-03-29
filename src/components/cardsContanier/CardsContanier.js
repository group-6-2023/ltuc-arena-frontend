import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./Card/ExerciseCard";
import ModalToAdd from "./Modal/ModalToAdd";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./cardscontanier.css";

export default function CardsContanier({
  setExercises,
  exercises,
  bodyPart,
  isMain,
}) {
  const [clickedCardData, setClickedCardData] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  const getAllExercise = async () => {
    let exercisesData = [];
    if (bodyPart === "all") {
      let url = `${process.env.REACT_APP_SERVER_URL}/allExercises`;
      const { data } = await axios(url);
      exercisesData = data;
    } else {
      let url2 = `${process.env.REACT_APP_SERVER_URL}/allExercisesByBodypart/${bodyPart}`;
      const { data } = await axios(url2);
      exercisesData = data;
    }
    setExercises(exercisesData);
  };
  useEffect(() => {
    getAllExercise();
  }, [bodyPart]);

  return (
    <>
      <div>
        <Container>
          <Row w xl={3}>
            {currentExercises.map((exercise) => {
              return (
                <>
                  <ExerciseCard
                    exercise={exercise}
                    key={exercise.id}
                    setClickedCardData={setClickedCardData}
                    setModalShow={setModalShow}
                    isMain={isMain}
                  />

                  <ModalToAdd
                    clickedCardData={clickedCardData}
                    modalShow={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </>
              );
            })}
          </Row>
        </Container>
        <br />
        <div className="pagination">
          {exercises.length > 9 && (
            <Pagination
              variant="outlined"
              shape="rounded"
              color="secondary"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="large"
            />
          )}
        </div>
        <br />
      </div>
    </>
  );
}

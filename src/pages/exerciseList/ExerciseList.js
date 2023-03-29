import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

import ExerciseCard from "../../components/cardsContanier/Card/ExerciseCard";
import HorizontalScrollbar from "../../components/searchExercises/HorizontalScrollbar/HorizontalScrollbar";
import CardsContanier from "../../components/cardsContanier/CardsContanier";
import { Container, Row } from "react-bootstrap";

export default function ExerciseList() {
  const { user } = useAuth0();
  const [favArr, setfavArr] = useState([]);
  const [saturday, setsaturday] = useState([]);
  const [sunday, setsunday] = useState([]);
  const [monday, setmonday] = useState([]);
  const [tuesday, settuesday] = useState([]);
  const [wednesday, setwednesday] = useState([]);
  const [thursday, setthursday] = useState([]);
  const [day, setDay] = useState("saturday");
  const weekdays = [
    "saturday",
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
  ];

  const getExercise = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/exerciseForOneUser/${user.email}`;
    const { data } = await axios(url);
    // setfavArr(data);
    const saturday = data.filter((e) => e.weeksday === "saturday");
    setsaturday(saturday);
    const sunday = data.filter((e) => e.weeksday === "sunday");
    setsunday(sunday);
    const monday = data.filter((e) => e.weeksday === "monday");
    setmonday(monday);
    const tuesday = data.filter((e) => e.weeksday === "tuesday");
    settuesday(tuesday);
    const wednesday = data.filter((e) => e.weeksday === "wednesday");
    setwednesday(wednesday);
    const thursday = data.filter((e) => e.weeksday === "thursday");
    setthursday(thursday);
  };

  let arrToMap = [];
  if (day === "saturday") {
    arrToMap = saturday;
  } else if (day === "sunday") {
    arrToMap = sunday;
  } else if (day === "monday") {
    arrToMap = monday;
  } else if (day === "tuesday") {
    arrToMap = tuesday;
  } else if (day === "wednesday") {
    arrToMap = wednesday;
  } else if (day === "thursday") {
    arrToMap = thursday;
  }

  useEffect(() => {
    getExercise();
  }, [day, favArr]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <HorizontalScrollbar
          data={weekdays}
          day={day}
          setDay={setDay}
          isList={true}
        />
      </div>
      <Container>
        {arrToMap.length === 0 ? (
          <div style={{ margin: "15% 0" }}>
            <h3 style={{ textAlign: "center" }}>
              Sadly you didn't add any Exercise in this day 😐
            </h3>
          </div>
        ) : (
          <Row xs={1} sm={2} md={3} style={{ minHeight: "50vh" }}>
            {arrToMap.map((exercise) => {
              return (
                <ExerciseCard
                  isList={true}
                  exercise={exercise}
                  setfavArr={setfavArr}
                />
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
}

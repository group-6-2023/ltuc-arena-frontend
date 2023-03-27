import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CardsContanier from "../../components/cardsContanier/CardsContanier";
import SearchExercises from "../../components/searchExercises/SearchExercises";
import axios from "axios";

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  const { user } = useAuth0();

  const addUser = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/infoForOneUser`;
    const body = {
      userName: user.name,
      profilePic: user.picture,
      email: user.email,
    };
    axios.post(url, body);
  };
  useEffect(() => {
    // addUser();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <CardsContanier
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </div>
  );
}

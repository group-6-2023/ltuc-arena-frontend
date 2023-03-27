import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CardsContanier from "../../components/cardsContanier/CardsContanier";
import SearchExercises from "../../components/searchExercises/SearchExercises";
import axios from "axios";
import SafteyTips from "../../components/safteyTips/SafteyTips";


export default function Home({ userList }) {
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
    const userExists = userList.find((e) => e.email === user.email);
    if (!userExists) {
      addUser();
    }
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />

      <SafteyTips />
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

import React from "react";
import PhotoCarousel from "../../components/photoCarousel/PhotoCarousel";
import MotvationContent from "../../components/motvationcontent/MotvationContent";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurCards from "../../components/OurCards/OurCards";
import BigRamy from "../../components/BigRamy/BigRamy";
import CardsContanier from "../../components/cardsContanier/CardsContanier";
import SearchExercises from "../../components/searchExercises/SearchExercises";
import { useState } from "react";

export default function MainPage() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <div>
      <PhotoCarousel />

      <MotvationContent />

      <BigRamy />
      <div id="explore" style={{ marginTop: "-50px" }}>
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <CardsContanier
          isMain={true}
          setExercises={setExercises}
          exercises={exercises}
          bodyPart={bodyPart}
        />
      </div>

      <AboutUs />

      <OurCards />
    </div>
  );
}

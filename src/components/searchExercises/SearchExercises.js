import axios from "axios";
import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar/HorizontalScrollbar";
import { useState, useEffect } from "react";
import "./SearchExercises.css";
import SearchBar from "./SearchBar/SearchBar";

export default function SearchExercises({
  setExercises,
  bodyPart,
  setBodyPart,
}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const getBodyParts = async () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/allBodypart`;
    const { data } = await axios(url);
    setBodyParts(["all", ...data]);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search) {
      const { data } = await axios(
        `${process.env.REACT_APP_SERVER_URL}/allExercises`
      );

      const searchedExercises = data.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  useEffect(() => {
    getBodyParts();
  }, []);

  return (
    <div className="search">
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      ></SearchBar>

      <HorizontalScrollbar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </div>
  );
}

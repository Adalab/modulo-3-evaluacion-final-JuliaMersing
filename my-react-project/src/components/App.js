import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";
import CharactersList from "./CharactersList";
import Logo from "../Image/Rick_and_Morty.png";
import "../stylesheet/App.css";
import ls from "../services/local-storage";
import Filters from "./Filters";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
      console.log(characters);
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  const handleFilter = (data) => {
    console.log(data);
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "specie") {
      setFilterSpecie(data.value);
    }
  };

  return (
    <div className="page">
      <img className="logo" src={Logo} alt="Logo" />
      <Filters
        filterName={filterName}
        filterGender={filterSpecie}
        handleFilter={handleFilter}
      />
      <ul className="characterList">
        <CharactersList characters={characters} />
      </ul>
    </div>
  );
};

export default App;

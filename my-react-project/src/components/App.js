import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";
import CharactersList from "./CharactersList";

const App = () => {
  const [characters, setCharacters] = useState([""]);

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  return (
    <div>
      <CharactersList characters={characters} />
    </div>
  );
};

export default App;

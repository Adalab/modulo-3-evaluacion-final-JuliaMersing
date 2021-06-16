import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";
import CharactersList from "./CharactersList";
import CharacterDetail from "./CharacterDetail";
import Logo from "../Image/Rick_and_Morty.png";
import "../stylesheet/App.css";
import ls from "../services/local-storage";
import Filters from "./Filters";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
    //console.log(characters);
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecie", filterSpecie);
  }, [characters, filterName, filterSpecie]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "specie") {
      setFilterSpecie(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecie === "") {
        return true;
      } else {
        return character.specie
          .toLowerCase()
          .includes(filterSpecie.toLowerCase());
      }
    });

  const renderCharacterDetails = (props) => {
    const routeCharacterId = props.match.params.characterId;

    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(routeCharacterId);
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <div className="page">
      <img className="logo" src={Logo} alt="Logo" />
      <Switch>
        <Route exact path="/">
          <div className="allCharacters">
            <Filters
              filterName={filterName}
              filterSpecies={filterSpecie}
              handleFilter={handleFilter}
            />
            <ul className="characterList">
              <CharactersList characters={filteredCharacters} />
            </ul>
          </div>
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetails} />
      </Switch>
    </div>
  );
};

export default App;

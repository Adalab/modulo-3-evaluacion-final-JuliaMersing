import React, { useState, useEffect } from "react";
import getApiData from "../services/Api";
import CharactersList from "./CharactersList";
import Notfound from "./Notfound";
import PageNotFound from "./PageNotFound";
import CharacterDetail from "./CharacterDetail";
import Logo from "../Image/Rick_and_Morty.png";
import "../stylesheet/App.scss";
import ls from "../services/local-storage";
import Filters from "./Filters";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecie, setFilterSpecie] = useState(ls.get("filterSpecie", ""));
  const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));

  useEffect(() => {
    if (characters.length === 0) {
      getApiData().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterSpecie", filterSpecie);
    ls.set("filterGender", filterGender);
  }, [characters, filterName, filterSpecie, filterGender]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "specie") {
      setFilterSpecie(data.value);
    } else if (data.key === "gender") {
      setFilterGender(data.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterSpecie === "All") {
        return true;
      } else {
        return character.specie
          .toLowerCase()
          .includes(filterSpecie.toLowerCase());
      }
    })
    .filter((character) => {
      return character.gender
        .toLowerCase()
        .includes(filterGender.toLowerCase());
    });
  const renderCharacterDetails = (props) => {
    const routeCharacterId = props.match.params.characterId;

    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(routeCharacterId);
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

  return (
    <div className="page">
      <img className="logo" src={Logo} alt="Logo" />
      <Switch>
        <Route exact path="/">
          <div>
            <Filters
              filterName={filterName}
              filterSpecies={filterSpecie}
              handleFilter={handleFilter}
            />
            <ul>
              {filteredCharacters.length > 0 ? (
                <CharactersList characters={filteredCharacters} />
              ) : (
                <Notfound />
              )}
            </ul>
          </div>
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetails} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

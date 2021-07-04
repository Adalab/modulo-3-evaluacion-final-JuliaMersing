import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CharacterDetails.scss";

const CharacterDetail = (props) => {
  const renderStatus = () => {
    if (props.character.status === "Dead") {
      return <i class="fas fa-dizzy"></i>;
    } else if (props.character.status === "unknown") {
      return <i class="far fa-question-circle"></i>;
    } else if (props.character.status === "Alive") {
      return "Alive";
    }
  };

  const renderSpecies = () => {
    if (props.character.specie === "Human") {
      return <i class="far fa-user"></i>;
    } else if (props.character.specie === "Humanoid") {
      return <i class="fab fa-reddit-alien"></i>;
    }
  };

  return (
    <div className="SingleCharacter">
      <article className="singleCharacterCard">
        <img
          className="imageCharacter"
          src={props.character.photo}
          alt={props.character.name}
        />
        <div className="characterDetails">
          <h4>{props.character.name}</h4>
          <ul>
            <li>Specie: {renderSpecies()}</li>
            <li>Planet: {props.character.planet}</li>
            <li>Episodes: {props.character.episode.length}</li>
            <li>Status: {renderStatus()}</li>
          </ul>
        </div>
      </article>
      <Link className="link" to="/">
        Volver
      </Link>
    </div>
  );
};

export default CharacterDetail;

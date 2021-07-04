import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CharacterDetails.scss";

const CharacterDetail = (props) => {
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
            <li>Specie: {props.character.species}</li>
            <li>Planet: {props.character.planet}</li>
            <li>Episodes: {props.character.episode.length}</li>
            <li>Status: {props.character.status}</li>
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

import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CharacterDetails.css";

const CharacterDetail = (props) => {
  return (
    <div>
      <article className="singleCharacterCard">
        <img
          className="imageCharacter"
          src={props.character.photo}
          alt={props.character.name}
        />
        <div className="characterDetails">
          <h4>{props.character.name}</h4>
          <ul>
            <li>{props.character.specie}</li>
            <li>{props.character.planet}</li>
            <li>{props.character.episode.length}</li>
            <li>{props.character.status}</li>
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

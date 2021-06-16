import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">Volver</Link>
      <article className="characterCard">
        <img
          className="imageCharacter"
          src={props.character.photo}
          alt={props.character.name}
        />
        <h4>{props.character.name}</h4>
        <ul>
          <li>{props.character.specie}</li>
          <li>{props.character.planet}</li>
          <li>{props.character.episode.length}</li>
          <li>{props.character.status}</li>
        </ul>
      </article>
    </div>
  );
};

export default CharacterDetail;

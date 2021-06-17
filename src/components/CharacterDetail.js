import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CharacterDetails.css";

const CharacterDetail = (props) => {
  return (
    /* const renderStatus = {props.character.status}
    if (renderStatus === dead) {
      return <i class="fas fa-dizzy"></i>
    }  */

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
            <li>Specie: {props.character.specie}</li>
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

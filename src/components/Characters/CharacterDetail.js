import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheet/Character/CharacterDetails.scss";
import PropTypes from "prop-types";

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
      <Link to="/">
        <i className="home_icon fas fa-reply" />
      </Link>
    </div>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  specie: PropTypes.string,
  id: PropTypes.number,
  planet: PropTypes.string,
  episode: PropTypes.number,
  status: PropTypes.string,
  gender: PropTypes.string,
};

export default CharacterDetail;

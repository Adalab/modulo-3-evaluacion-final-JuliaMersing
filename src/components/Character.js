import React from "react";
import "../stylesheet/Character.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <article className="characterCard">
      <Link to={`/character/${props.character.id}`}>
        <img
          className="imageCharacter"
          src={props.character.photo}
          alt={props.character.name}
        />
      </Link>
      <h4>{props.character.name}</h4>
      <p>{props.character.specie}</p>
    </article>
  );
};

export default Character;

Character.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
};

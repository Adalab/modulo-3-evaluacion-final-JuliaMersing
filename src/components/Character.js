import React from "react";
import "../stylesheet/Character.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <Link className="link character" to={`/character/${props.character.id}`}>
      <div className="character__card">
        <div className="character__card--name">
          <h4>{props.character.name}</h4>
        </div>
        <img
          className="character__card--img"
          src={props.character.photo}
          alt={props.character.name}
        />
        <div className="character__card--info">
          <p className="character__card--text-info">{props.character.specie}</p>
          <p className="character__card--text-info">{props.character.gender}</p>
        </div>
      </div>
    </Link>
  );
};

export default Character;

Character.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
};

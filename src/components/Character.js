import React from "react";
import "../stylesheet/Character.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Character = (props) => {
  const renderStatus = () => {
    if (props.character.status === "Dead") {
      return <i class="fas fa-skull"></i>;
    } else if (props.character.status === "unknown") {
      return <i title="Dear or alive...Who knows!" class="fas fa-question"></i>;
    } else if (props.character.status === "Alive") {
      return <i class="fas fa-heartbeat"></i>;
    }
  };

  const renderSpecies = () => {
    if (props.character.specie === "Human") {
      return <i class="far fa-user"></i>;
    } else if (props.character.specie === "Humanoid") {
      return <span>👽</span>;
    } else if (props.character.specie === "unknown") {
      return <span>⚧️</span>;
    }
  };

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
          <p className="character__card--text-info">{renderSpecies()}</p>
          <p className="character__card--text-info">{props.character.gender}</p>
          <p className="character__card--text-info">{renderStatus()}</p>
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

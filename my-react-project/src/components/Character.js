import React from "react";
import "../stylesheet/Character.css";

const Character = (props) => {
  return (
    <article className="characterCard">
      <img
        className="imageCharacter"
        src={props.character.image}
        alt={props.character.name}
      />
      <h4>{props.character.name}</h4>
      <p>{props.character.specie}</p>
    </article>
  );
};

export default Character;

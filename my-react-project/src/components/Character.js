import React from "react";

const Character = (props) => {
  return (
    <article>
      <img src={props.character.image} alt={props.character.name} />
      <h4>{props.character.name}</h4>
      <p>{props.character.specie}</p>
    </article>
  );
};

export default Character;

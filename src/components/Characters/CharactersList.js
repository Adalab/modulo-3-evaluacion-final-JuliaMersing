import React from "react";
import Character from "../Characters/Character";
import "../../stylesheet/Character/CharacterList.scss";
import PropTypes from "prop-types";

const CharactersList = (props) => {
  const characterElements = props.characters.map((character) => {
    return <Character key={character.id} character={character} />;
  });

  return (
    <section>
      <ul className="cards">{characterElements}</ul>
    </section>
  );
};

CharactersList.propTypes = {
  characterElements: PropTypes.array,
};

export default CharactersList;

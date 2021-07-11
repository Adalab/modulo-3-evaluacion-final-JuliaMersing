import React from "react";
import PropTypes from "prop-types";
import "../../stylesheet/Filters/FilterSelect.scss";

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="specie">
        Species:
      </label>
      <select
        className="form__select"
        id="Specie"
        name="Specie"
        onChange={handleChange}
        value={props.filterBySpecie}
      >
        <option value="All">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

FilterBySpecie.propTypes = {
  specie: PropTypes.string,
};

export default FilterBySpecie;

import React from "react";
import "../stylesheet/FilterSelect.scss";

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };
  return (
    <>
      <label className="form__label hidden" htmlFor="specie">
        Species:
      </label>
      <select
        className="form__select hidden"
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

export default FilterBySpecie;

import React from "react";

const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "specie",
    });
  };
  return (
    <>
      <form action="#">
        <label inputsearch htmlFor="specie"></label>
        <input
          className="inputsearch"
          type="text"
          name="specie"
          id="specie"
          placeholder="Filtra por especie"
          value={props.filterSpecie}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default FilterBySpecie;

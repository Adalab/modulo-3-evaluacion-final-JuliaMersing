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
      <label htmlFor="specie">Filtrar por especie:</label>
      <input
        type="text"
        name="specie"
        id="specie"
        value={props.filterSpecie}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterBySpecie;

import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label htmlFor="name">Filtrar por nombre:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;

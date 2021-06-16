import React from "react";

const FilterByName = (props) => {
  console.log(props);
  const handleChange = (ev) => {
    console.log(ev);
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
        placeholder="Filtra por nombre"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;

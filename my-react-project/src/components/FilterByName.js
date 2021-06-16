import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    console.log(ev);
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <form action="#">
        <label htmlFor="name"> </label>
        <input
          className="inputsearch"
          type="text"
          name="name"
          id="name"
          placeholder="Filtra por nombre"
          value={props.filterName}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default FilterByName;

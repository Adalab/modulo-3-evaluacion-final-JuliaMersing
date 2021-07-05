import React from "react";
import "../stylesheet/FilterByName.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="name">
        Filter by name:
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id="name"
        placeholder="We are waiting...please type a name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;

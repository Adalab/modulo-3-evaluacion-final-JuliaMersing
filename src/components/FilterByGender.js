import React from "react";
import "../stylesheet/FilterSelect.scss";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <label className="form__label hidden" htmlFor="Gender">
        Genre
      </label>
      <select
        className="form__select hidden"
        id="Gender"
        name="Gender"
        onChange={handleChange}
        value={props.filterByGender}
      >
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </>
  );
};

export default FilterByGender;

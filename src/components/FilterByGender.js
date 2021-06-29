import React from "react";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <label htmlFor="name"> </label>
      <div>
        <label className="inputsearch" htmlFor="Gender"></label>
        <select
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
      </div>
    </>
  );
};

export default FilterByGender;

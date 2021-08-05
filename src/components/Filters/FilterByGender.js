import React from "react";
import "../../stylesheet/Filters/FilterSelect.scss";
import PropTypes from "prop-types";

const FilterByGender = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "gender",
    });
  };
  return (
    <>
      <label className="form__label" htmlFor="gender">
        Gender:
      </label>
      <select
        className="form__select"
        id="gender"
        name="gender"
        onChange={handleChange}
        value={props.filterByGender}
      >
        <option value="all">All Genders</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
};

FilterByGender.propTypes = {
  specie: PropTypes.string,
};

export default FilterByGender;

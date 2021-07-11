import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import FilterByGender from "./FilterByGender";
import "../../stylesheet/Filters/Filter.scss";
import ResetButton from "../../services/ResetButtom";

const Filters = (props) => {
  return (
    <section>
      <form className="form__container">
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecie
          filterSpecie={props.filterSpecie}
          handleFilter={props.handleFilter}
        />
        <FilterByGender
          filterGender={props.filterGender}
          handleFilter={props.handleFilter}
        />
        <ResetButton handleReset={props.handleReset} />
      </form>
    </section>
  );
};

export default Filters;

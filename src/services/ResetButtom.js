import React from "react";
import "../stylesheet/Character/ResetButton.scss";

const ResetButton = (props) => {
  const handleResetClick = () => {
    props.handleReset();
  };
  return (
    <div className="reset">
      <button className="reset__button" onClick={handleResetClick}>
        <i className="reset__button--icon fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ResetButton;

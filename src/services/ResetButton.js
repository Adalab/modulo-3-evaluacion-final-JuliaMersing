import React from "react";
import "../stylesheet/Character/ResetButton.scss";

const ResetButton = ({handleReset}) => {
  return (
    <div className="reset">
      <button type='reset' title='resetButton' className="reset__button" onClick={handleReset}>
        <i className="reset__button--icon fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ResetButton;

/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FormLabel = ({ value = "Label", color, state, className }) => {
  return (
    <div className={`form-label ${className}`}>
      <div className={`label-5 color-20-${color} state-20-${state}`}>{value}</div>
    </div>
  );
};

FormLabel.propTypes = {
  value: PropTypes.string,
  color: PropTypes.oneOf(["warning", "info", "success", "secondary", "primary", "one", "error"]),
  state: PropTypes.oneOf(["disabled", "error", "enabled"]),
};

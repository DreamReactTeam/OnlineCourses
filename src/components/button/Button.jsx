/* eslint-disable */
import React from "react";

import "./Button.css";

const STYLES = ["btn-primary", "btn-outline"];

const SIZES = ["btn-medium", "btn-large"];

const Button = ({ children, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;

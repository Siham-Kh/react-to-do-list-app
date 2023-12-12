import React, { useState, useEffect } from "react";
import "../styles/styles.css"; // Import the CSS file
import "../styles/input.css";

function Abutton({ value, onAddClick }) {
  return (
    <button onClick={onAddClick} className="app-button">
      {value}
    </button>
  );
}

function Input({ value, onCall, onAdd, onFocusCalled, onBlurry }) {
  const create = "Add item: ";
  return (
    <div className="app-header">
      <input
        type="text"
        value={value}
        onChange={(e) => onCall(e.target.value)}
        className="app-input"
        onFocus={onFocusCalled}
        onBlur={onBlurry}
      />
      <Abutton value={"Add"} onAddClick={onAdd} />
    </div>
  );
}

export default Input;

import React, { useState, useEffect } from "react";

function Ebutton({ value, onAddClick }) {
  return (
    <button onClick={onAddClick} className="app-remove-button ">
      {value}
    </button>
  );
}

export default Ebutton;

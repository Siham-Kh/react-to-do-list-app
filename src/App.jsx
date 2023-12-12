// App.jsx
import React, { useState, useEffect } from "react";
import "./styles/styles.css"; // Import the CSS file
import "./styles/items.css";
import "./styles/input.css";
import "./styles/checkbox.css";
import "./styles/buttons.css";
import Input from "./code/Inputs";
import Ebutton from "./code/Button";
import CheckButton from "./code/CheckButtons";
import { motion, useMotionValue, useTransform } from "framer-motion";
import removeIcon from "./images/cor.png";
const initList = [];

export function App(props) {
  const [itemhome, setItem] = useState("Type item");
  const [list, setList] = React.useState(initList);
  const [itemEdit, setItemEdit] = useState(null);
  const title = "To-Do list";
  const text = "Type item";
  var gItem = itemhome;
  function handleAdd(value) {
    setItem(value);
    gItem = value;
  }
  function handleClick() {
    if (contains(gItem, list) || gItem === text || gItem.trim() === "") {
      setItem(text);
      return;
    } else {
      const obj = {
        id: list.length + 1,
        check: false,
        name: gItem,
      };
      const newList = list.concat(obj);
      setList(newList);
      setItem(text);
    }
  }

  function handleRemove(id) {
    const newLi = list.filter((item) => item.id !== id);
    setList(newLi);
  }

  function handleEditChange(id, name) {
    const newList = list.slice();
    newList.filter((item) => {
      if (item.id === id) item.name = name;
    });
    setItemEdit(name);
    setList(newList);
  }
  function handleEditEnd() {
    setItemEdit(null);
  }

  function handleCheck(id) {
    const newlist = list.map((item) => {
      if (item.id === id) {
        return { ...item, check: !item.check };
      }
      return item;
    });
    setList(newlist);
  }

  function handleFocus() {
    if (itemhome === text) {
      setItem("");
    }
  }

  function handleBlur() {
    if (itemhome === "") {
      setItem(text);
    }
  }

  return (
    <div className="app-container">
      <h1 className="title">{title}</h1>
      <Input
        value={itemhome}
        onCall={(value) => handleAdd(value)}
        onAdd={() => handleClick()}
        onFocusCalled={() => handleFocus()}
        onBlurry={() => handleBlur()}
      />
      <ul className="app-list">
        {list.map((item) => (
          <li
            key={item.id}
            className={`app-list-item ${item.check ? "checked" : ""}`}
          >
            <>
              <CheckButton
                checked={item.check}
                handleCheck={() => handleCheck(item.id)}
              />
              <input
                className={`app-item-name ${item.check ? "checked" : ""}`}
                type="text"
                value={item.name}
                onChange={(e) => handleEditChange(item.id, e.target.value)}
                onBlur={handleEditEnd}
                readOnly={item.check}
              />
              <Ebutton value={"X"} onAddClick={() => handleRemove(item.id)}>
                <img src={removeIcon} alt="Remove" />
              </Ebutton>
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}

function contains(elem, list) {
  return list.filter((e) => e.name === elem).length > 0;
}

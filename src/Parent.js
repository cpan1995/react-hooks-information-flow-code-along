import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childColor, setChildColor] = useState('#FFF')

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setChildColor(newRandomColor);
    setColor(newRandomColor); // update color state to a new value
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color = {childColor} onChangeColor = {handleChangeColor}/>
      <Child color = {childColor} onChangeColor = {handleChangeColor}/>
    </div>
  );
}

export default Parent;

import React, { useState } from "react";
import "../input.css";
const Buttons = () => {
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("");
 
  function changeBackground(color) {
    setBgColor(color);
    setColor(color);
  }
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="w-lvw flex justify-center items-center h-screen"
    >
      <div style={{backgroundColor:color}}className=" bg-white h-11 w-2/3 rounded-lg border border-black  p-6 flex items-center justify-around">
        <button
          onClick={()=>changeBackground("green")}
          className="bg-green-600 rounded-lg border border-black h-7 w-20"
        >
          green
        </button>
        <button
          onClick={()=>changeBackground("red")}
          className="bg-red-700 rounded-lg border border-black h-7 w-20"
        >
          red
        </button>
        <button
          onClick={()=>changeBackground("white")}
          className="rounded-lg border border-black h-7 w-20 bg-white"
        >
          white
        </button>
        <button
          onClick={()=>changeBackground("black")}
          className="bg-black text-white rounded-lg border border-black h-7 w-20"
        >
          black
        </button>
        <button
          onClick={()=>changeBackground("yellow")}
          className="bg-yellow-500 rounded-lg border border-black h-7 w-20"
        >
          yellow
        </button>
        <button
          onClick={()=>changeBackground("purple")}
          className="bg-[purple] rounded-lg border border-black h-7 w-20"
        >
          purple
        </button>
        <button
          onClick={()=>changeBackground("blue")}
          className="bg-blue-700 rounded-lg border border-black h-7 w-20"
        >
          blue
        </button>
        <button
          onClick={() => changeBackground("orange")}
          className="bg-orange-800 rounded-lg border border-black h-7 w-20"
        >
          orange
        </button>
      </div>
    </div>
  );
};

export default Buttons;

import { useState } from "react";

import "./input.css";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  const [characters, setCharacters] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");
  const[isClicked,setIsClicked]=useState(false)
  //useRef hook for taking reference to copy the password
  const passwordRef = useRef(null);
  const passwordCopytoClipBoard = useCallback(() => {
    setIsClicked(true)
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) string += "0123456789";
    if (characters) string += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    let count = length;
    while (count != 0) {
      let char = string[Math.floor(Math.random() * 1000) % string.length];
      pass += char;
      count--;
    }

    setPassword(pass);
  }, [length, characters, number, setPassword]);

  useEffect(() => {
    passwordGenerator();
    setIsClicked(false)
  }, [length, number, characters, passwordGenerator]);

  return (
    <>
      <div className="h-36 w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700 border border-black ">
        <h1 className="text-white font-bold text-xl text-center py-2">
          Password Generator
        </h1>
        <input
          className="w-5/6 p-1 rounded-md outline-none"
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={passwordCopytoClipBoard}
          className={`mx-2 h-8 p-1 rounded-md outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ${isClicked?"bg-transparent":""}`}
        >
          Copy
        </button>
        <div className="flex my-4 text-sm gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label htmlFor="">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;

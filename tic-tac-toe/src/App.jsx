import { useState } from "react";
import "./App.css";
import Boxes from "./components/Boxes";
function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
function handleReset(){
  setState(Array(9).fill(null))
  setIsXTurn(true);
}
  const isWinner = checkWinner();
  const handleClick = (index) => {
    const copyState = [...state];
    if (copyState[index] !== null) {
      return;
    }
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };
  return (
    <div>
      <div className="row">
        <Boxes onClick={() => handleClick(0)} value={state[0]}></Boxes>
        <Boxes onClick={() => handleClick(1)} value={state[1]}></Boxes>
        <Boxes onClick={() => handleClick(2)} value={state[2]}></Boxes>
      </div>
      <div className="row">
        <Boxes onClick={() => handleClick(3)} value={state[3]}></Boxes>
        <Boxes onClick={() => handleClick(4)} value={state[4]}></Boxes>
        <Boxes onClick={() => handleClick(5)} value={state[5]}></Boxes>
      </div>
      <div className="row">
        <Boxes onClick={() => handleClick(6)} value={state[6]}></Boxes>
        <Boxes onClick={() => handleClick(7)} value={state[7]}></Boxes>
        <Boxes onClick={() => handleClick(8)} value={state[8]}></Boxes>
      </div>
      <div className="bottom">
        {isWinner ? (
          <h1>Winner is {isWinner}</h1>
        ) : isXTurn ? (
          <h1>Player X Turn</h1>
        ) : (
          <h1>Player O Turn</h1>
        )}
        <button onClick={handleReset}>Reset The Game</button>
      </div>
    </div>
  );
}

export default App;

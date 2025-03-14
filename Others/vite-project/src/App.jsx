import { useState } from "react";
import "../src/index.css";
import Github from "./components/Github-Finder/Github";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Github />
    </>
  );
}

export default App;

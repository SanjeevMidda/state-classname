import { useState } from "react";
import "./index.css";

function App() {
  const [move, setMove] = useState("centerContainer");
  return (
    <div className="App">
      <div className="controls">
        <h3 onClick={() => setMove("centerContainer left")}>L</h3>
        <h3 onClick={() => setMove("centerContainer middle")}>C</h3>
        <h3 onClick={() => setMove("centerContainer right")}>R</h3>
      </div>
      <div className={move}>
        <div className="square"></div>
      </div>
    </div>
  );
}

export default App;

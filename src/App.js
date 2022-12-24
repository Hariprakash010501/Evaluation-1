import "./styles.css";
import { useState } from "react";
function State() {
  const [ball, setBall] = useState(0);
  const [run, setRun] = useState(0);
  const handleClick = () => {
    function rand(start, stop) {
      return Math.floor(Math.random() * (stop - start + 1)) + start;
    }
    {
      ball <= 5 ? setBall((ball) => ball + 1) : null;
    }
    {
      ball <= 5 ? setRun((run) => run + rand(0, 6)) : null;
    }
  };
  const handleChange = () => {
    setBall(0);
    setRun(0);
  };
  return (
    <div>
      <div className="App">
        <h1>Cricket Score Board</h1>
        <h2>Balls : {ball}</h2>
        <h2>Runs : {run}</h2>
      </div>
      <div className="align">
        <p>
          You get total of 6 balls(1 over). The button get disabled after that
        </p>
        {ball < 6 ? (
          <button onClick={handleClick}>Click to hit the ball</button>
        ) : (
          <button disabled={true}>Click to hit the ball</button>
        )}
        <button onClick={handleChange}>Reset Game</button>
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <State />
    </div>
  );
}

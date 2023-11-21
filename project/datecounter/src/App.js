import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

 

  return (
    <div>
      <div>
        <input
          type="range"
          onChange={e=>setStep(Number(e.target.value))}
          min={1}
          max={10}
          vlaue={step}
        />
        { step}
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step : {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input type="text" value={count}  onChange= { e=>setCount(Number(e.target.value))} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>

        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;

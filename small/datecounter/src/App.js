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
  const date = new Date();
  return (
  
    <div>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        Step : {step}
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={  () =>   setCount((c) => c - 1)}>-</button>
        Count : {count}
        <button onClick={  () =>   setCount((c) => c + 1)}>+</button>
      </div>

      <div>{count} </div>
    </div>
  );
}

export default App;

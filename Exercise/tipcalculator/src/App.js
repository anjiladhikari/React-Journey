import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = ((percentage1 + percentage2) / 200) * bill;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>

      <Output bill={bill} tip={tip} />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <lable>How much was the bill ? </lable>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absoultely amazing (20%)</option>
      </select>
    </>
  );
}

function Output({ bill, tip }) {
  return <h3>You pay ${bill + tip}  (${bill }+ ${tip} tip)</h3>;
}



export default App;

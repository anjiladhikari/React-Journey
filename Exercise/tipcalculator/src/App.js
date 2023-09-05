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
      <SelectPercentage ></SelectPercentage>
      <SelectPercentage></SelectPercentage>
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <h2>How much was the bill ? </h2>
      <input type="number" placeholder="Bill value" />
    </div>
  );
}

function SelectPercentage({ myTips, handleMyTips }) {
  return (
    <>
      <h2>How did you like the service ?</h2>
      <select>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absoultely amazing (20%)</option>
      </select>
    </>
  );
}

export default App;

import "./App.css";

function App() {
  return (
    <div className="app">
      <Bill />

      <Mysat />

      <Friendsat />




    </div>
  );
}

function Bill() {
  return (
    <div>
      <h2>How much was the bill ? </h2>
      <input type="number" placeholder="Bill value" />
    </div>
  );
}

function Mysat() {
  return (
    <>
      <h2>How did you like the service ? </h2>

      <select>
        <option value="">Dissatisfied (0%)</option>
        <option value="">It was okay (5%)</option>
        <option value="">It was good (10%)</option>
        <option value="">Absoultely amazing (20%)</option>
      </select>
    </>
  );
}

function Friendsat() {
  return (
    <>
      <h2>How did your friend like the service? </h2>

      <select>
        <option value="">Dissatisfied (0%)</option>
        <option value="">It was okay (5%)</option>
        <option value="">It was good (10%)</option>
        <option value="">Absoultely amazing (20%)</option>
      </select>
    </>
  );
}

export default App;

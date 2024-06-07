import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  // const [day, setDay] = useState(0);

  function getDate(num) {
    const date = new Date();
    date.setDate(date.getDate() + num);
    return date.toLocaleDateString("en-US");
  }

  function handleStepMinus() {
    setStep((s) => s - 1);
  }

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleCountMinus() {
    setCount((c) => c + step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  return (
    <div className="main">
      <div>
        <button onClick={handleStepMinus}>-</button>Step: {step}
        <button onClick={handleStepPlus}>+</button>
      </div>
      <div>
        <button onClick={handleCountMinus}>-</button>Count: {count}
        <button onClick={handleCountPlus}>+</button>
      </div>

      {count === 0 && <span>Today is</span>}
      {count > 0 && <span>{count} day from today is</span>}
      {count < 0 && <span>{count} day ago is</span>}
    </div>
  );
}

export default App;

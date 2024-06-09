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
    setCount((c) => c - step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  return (
    <div className="main">
      <IntroductionParagraph />

      <div>
        <div>
          <button onClick={handleStepMinus}>-</button>Step: {step}
          <button onClick={handleStepPlus}>+</button>
        </div>
        <div>
          <button onClick={handleCountMinus}>-</button>Count: {count}
          <button onClick={handleCountPlus}>+</button>
        </div>

        {count === 0 && <span>Today is {getDate(0)}</span>}
        {count > 0 && (
          <span>
            {count} day{count > 1 ? "s" : ""} from today is {getDate(count)}
          </span>
        )}
        {count < 0 && (
          <span>
            {Math.abs(count)} day{Math.abs(count) > 1 ? "s" : ""} ago was{" "}
            {getDate(count)}
          </span>
        )}
      </div>
    </div>
  );
}

function IntroductionParagraph() {
  return (
    <div>
      <h1>Date-Counter</h1>
      <div className="paragraph">
        This date counter app is a simple tool designed to calculate and display
        the number of days from or to today's date. Users can adjust the step
        value to increase or decrease the count incrementally. The count value
        reflects the number of days to add or subtract from the current date.
        When the count is zero, the app displays today's date. When the count is
        positive, it shows the date a certain number of days in the future.
        Conversely, when the count is negative, it shows the date a certain
        number of days in the past. This intuitive interface allows for quick
        and easy date calculations, making it useful for planning and tracking
        dates relative to today.
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [hours, setHours] = useState(new Date().getHours());
  const [mins, setMins] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      const currentHour = new Date().getHours();
      const currentMins = new Date().getMinutes();
      const currentSeconds = new Date().getSeconds();
      setHours(currentHour);
      setMins(currentMins);
      setSeconds(currentSeconds);
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <div className="outer-container">
        <div className="inner-container">
          <span>{hours}</span>:<span>{mins}</span>:<span>{seconds}</span>
        </div>
      </div>
    </div>
  );
}

export default App;

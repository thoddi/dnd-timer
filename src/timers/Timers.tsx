import { useContext } from "react";
import { TimerContext } from "../contexts/AppContextProvider";
import Timer from "./Timer";

function Timers() {
  const { timers } = useContext(TimerContext);

  return (
    <div className="timers" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Teljarar</h2>
      {timers.map((timer) => (
        <Timer key={timer.id} timer={timer}></Timer>
      ))}
    </div>
  );
}

export default Timers;
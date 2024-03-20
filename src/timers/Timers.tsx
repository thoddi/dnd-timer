import { useContext } from "react";
import { TimerContext } from "../contexts/AppContextProvider";

function Timers() {
  const { timers } = useContext(TimerContext);

  return (
    <div className="timers" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Teljarar</h2>
      {timers.map((timer) => (
        <div key={timer.id} style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
          {timer.name}
        </div>
      ))}
    </div>
  );
}
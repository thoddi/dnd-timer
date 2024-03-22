import { useContext } from "react";
import { TimerContext } from "../contexts/AppContextProvider";
import TimerItem from "./Timer";

function Timers() {
  const { list: timers } = useContext(TimerContext);

  return (
    <div className="timers" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Teljarar</h2>
      {timers.map((timer) => (
        <TimerItem key={timer.id}
                   id={timer.id}
                   name={timer.name}
                   durationId={timer.durationId}
                   eventId={timer.eventId}
                   logId={timer.logId}
                   finishAtInGameTime={timer.finishAtInGameTime}></TimerItem>
      ))}
    </div>
  );
}

export default Timers;
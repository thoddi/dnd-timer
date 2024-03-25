import { useContext } from "react";
import { TimerContext } from "../contexts/AppContextProvider";
import TimerItem from "./Timer";

function TimerList() {
  const { list: timers } = useContext(TimerContext);

  return (
    <div>
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

export default TimerList;
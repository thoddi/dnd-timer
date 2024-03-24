import { useContext } from "react";
import { TimerContext } from "../contexts/AppContextProvider";
import TimerItem from "./Timer";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";

function TimerList() {
  const { list: timers } = useContext(TimerContext);

  return (
    <div>
      {/* <Card>
        <CardHeader className="d-flex justify-content-between">
          <h5>Teljarar</h5>
        </CardHeader>
      </Card> */}
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
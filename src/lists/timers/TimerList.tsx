import { useContext } from "react";
import TimerItem from "./Timer";
import Card from "react-bootstrap/esm/Card";
import { TimerContext } from "../../contexts/AppContextProvider";

function TimerList() {
  const { list } = useContext(TimerContext);

  return (
    <div className="mt-3">
      <Card style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}>
        <Card.Header className="p-2" style={{ borderBottom: 'none' }}><h5>Teljarar</h5></Card.Header>
      </Card>
      {list.map((timer) => (
        <TimerItem key={timer.id}
                   id={timer.id}
                   name={timer.name}
                   durationId={timer.durationId}
                   eventId={timer.eventId}
                   logId={timer.logId}
                   finishAfterSeconds={timer.finishAfterSeconds}></TimerItem>
      ))}
    </div>
  );
}

export default TimerList;
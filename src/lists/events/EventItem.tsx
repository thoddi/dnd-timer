import { useContext, useState } from "react";
import { EventContext, LogContext, TimeContext } from "../../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf, faXmark } from "@fortawesome/free-solid-svg-icons";
import CreateTimerModal from "../timers/CreateTimerModal";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";

interface Props {
  id: number;
  name: string;
}

function EventItem({ id, name }: Props) {
  const [isCreatingTimer, setIsCreatingTimer] = useState(false);

  const { remove } = useContext(EventContext);
  const { add: addLog } = useContext(LogContext);
  const { time } = useContext(TimeContext);

  return (
    <>
      <Card className="p-2 mt-2">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <Button variant="outline-success" size="sm" onClick={() => addLog({ text: name, inGameTime: time, eventId: id })}>
              <FontAwesomeIcon icon={faCalendarPlus}></FontAwesomeIcon>
            </Button>
            &ensp;{name}
          </div>
          <div>
            <Button className="me-1" variant="outline-secondary" size="sm" onClick={() => setIsCreatingTimer(true)}>
              <FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
            </Button>
            <Button variant="outline-danger" size="sm" onClick={() => remove(id)}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </Card>
    {/* <div style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
      {name}
      <button style={{ marginLeft: 'auto' }} onClick={() => addLog({ text: name, inGameTime: time, eventId: id })}>Kveikja</button>
      <button onClick={() => setIsCreatingTimer(true)}>Mæla</button>
      <button onClick={() => remove(id)}><FontAwesomeIcon icon={faXmark} color="red"></FontAwesomeIcon></button>
    </div> */}
      <CreateTimerModal show={isCreatingTimer} onHide={() => setIsCreatingTimer(false)} eventId={id}></CreateTimerModal>
    </>
  );
}

export default EventItem;
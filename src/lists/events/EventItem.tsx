import { useContext, useState } from "react";
import { EventContext, LogContext, TimeContext } from "../../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CreateTimerModal from "../../timers/CreateTimerModal";

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
    <div style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
      {name}
      <button style={{ marginLeft: 'auto' }} onClick={() => addLog({ text: name, inGameTime: time, eventId: id })}>Kveikja</button>
      <button onClick={() => setIsCreatingTimer(true)}>Mæla</button>
      <button onClick={() => remove(id)}><FontAwesomeIcon icon={faXmark} color="red"></FontAwesomeIcon></button>
      <CreateTimerModal show={isCreatingTimer} onHide={() => setIsCreatingTimer(false)} eventId={id}></CreateTimerModal>
    </div>
  );
}

export default EventItem;
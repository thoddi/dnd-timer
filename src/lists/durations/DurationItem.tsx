import { useContext, useState } from "react";
import { DurationContext, LogContext, TimeContext } from "../../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CreateTimerModal from "../../timers/CreateTimerModal";

interface Props {
  id: number;
  name: string;
  duration: number;
}

function DurationItem({ id, name, duration }: Props) {
  const [isCreatingTimer, setIsCreatingTimer] = useState(false);

  const { remove } = useContext(DurationContext);
  const { add: addLog } = useContext(LogContext);
  const { time, addTime } = useContext(TimeContext);

  const applyDuration = () => {
    addLog({ text: name, inGameTime: time, durationId: id });
    addTime(duration);
  };

  return (
    <div style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
      {name}
      <button style={{ marginLeft: 'auto' }} onClick={applyDuration}>Kveikja</button>
      <button onClick={() => setIsCreatingTimer(true)}>Mæla</button>
      <button onClick={() => remove(id)}><FontAwesomeIcon icon={faXmark} color="red"></FontAwesomeIcon></button>
      <CreateTimerModal show={isCreatingTimer} onHide={() => setIsCreatingTimer(false)} eventId={id}></CreateTimerModal>
    </div>
  );
}

export default DurationItem;
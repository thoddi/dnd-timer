import { useContext, useState } from "react";
import { LogContext, TimeContext } from "../contexts/AppContextProvider";
import Modal from "../Modal";
import CreateTimer from "../timers/CreateTimer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface Props {
  id: number;
  text: string;
  inGameTime: number;
}

function LogItem({ id, text, inGameTime }: Props) {
  const [isCreatingTimer, setIsCreatingTimer] = useState(false);
  const { time } = useContext(TimeContext);
  const { remove } = useContext(LogContext);
  
  const howLongAgo = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 1) {
      return `${days} dagar síðan`;
    } else if (hours > 1) {
      return `${hours} klukkutímar síðan`;
    } else if (minutes > 1) {
      return `${minutes} mínútur síðan`;
    } else {
      return `${seconds} sekúndur síðan`;
    }
  };

  return (
    <div style={{ display: 'flex', margin: 5, padding: 5, borderTop: '1px solid grey' }}>
      <div>
        {text}
      </div>
      <div style={{ marginLeft: 'auto' }}>
        {howLongAgo(time - inGameTime)}
        <button onClick={() => setIsCreatingTimer(true)}>Mæla</button>
        <button onClick={() => remove(id)}><FontAwesomeIcon icon={faXmark} color="red"></FontAwesomeIcon></button>
      </div>      
      {isCreatingTimer && (
        <Modal onClose={() => setIsCreatingTimer(false)}>
          <CreateTimer logId={id}></CreateTimer>
        </Modal>
      )}
    </div>
  );
}

export default LogItem;
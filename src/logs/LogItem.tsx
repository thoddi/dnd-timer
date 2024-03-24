import { useContext, useState } from "react";
import { LogContext, TimeContext } from "../contexts/AppContextProvider";
import CreateTimerModal from "../timers/CreateTimerModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";
import { faHourglassHalf } from "@fortawesome/free-regular-svg-icons";

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

    if (days >= 1) {
      return `${days} dagar síðan`;
    } else if (hours >= 1) {
      return `${hours} klst. síðan`;
    } else if (minutes >= 1) {
      return `${minutes} mín. síðan`;
    } else {
      return `${seconds} sek. síðan`;
    }
  };

  return (
    <div className="hover-container p-2">
      <div className="d-flex w-100 justify-content-between" style={{ minHeight: 31 }}>
        {text}
        <div className="show-on-hover d-flex gap-1">
          <Button variant="outline-secondary" size="sm" onClick={() => setIsCreatingTimer(true)}>
            <FontAwesomeIcon icon={faHourglassHalf}></FontAwesomeIcon>
          </Button>
          <Button variant="outline-danger" size="sm" onClick={() => remove(id)}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </Button>
        </div>
        <small className="hide-on-hover">{howLongAgo(time - inGameTime)}</small>
      </div>
      <CreateTimerModal show={isCreatingTimer} onHide={() => setIsCreatingTimer(false)} logId={id}></CreateTimerModal>
    </div>
  );
}

export default LogItem;
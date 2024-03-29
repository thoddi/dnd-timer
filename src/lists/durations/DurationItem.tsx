import { useContext, useState } from "react";
import { DurationContext, LogContext, TimeContext } from "../../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faHourglassHalf, faXmark } from "@fortawesome/free-solid-svg-icons";
import CreateTimerModal from "../timers/CreateTimerModal";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";

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
    <>
      <Card className="p-2 mt-2">
        <div className="d-flex w-100 justify-content-between">
          <div>
            <Button variant="outline-success" size="sm" onClick={applyDuration}>
              <FontAwesomeIcon icon={faForward}></FontAwesomeIcon>
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
      <CreateTimerModal show={isCreatingTimer} onHide={() => setIsCreatingTimer(false)} eventId={id}></CreateTimerModal>
    </>
  );
}

export default DurationItem;
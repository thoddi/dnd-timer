import { useCallback, useContext } from "react";
import { LogContext, TimeContext, TimerContext } from "../../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

interface Props {
  id: number;
  durationId?: number;
  eventId?: number;
  logId?: number;
  name: string;
  finishAfterSeconds?: number;
}

function TimerItem({ id, durationId, eventId, logId, name, finishAfterSeconds }: Props) {
  const { time, isPlaying } = useContext(TimeContext);
  const { list: logs } = useContext(LogContext);
  const { remove } = useContext(TimerContext);

  const getStartTime = useCallback(() => {
    if (durationId) {
      return logs.findLast((log) => log.durationId === durationId)?.inGameTime ?? 0;
    } else if (eventId) {
      return logs.findLast((log) => log.eventId === eventId)?.inGameTime ?? 0;
    } else if (logId) {
      // TODO: Þetta ætti aldrei að þurfa að uppfæra.
      return logs.find((log) => log.id === logId)?.inGameTime ?? 0;
    }
    return 0;
  }, [logs, durationId, eventId, logId]);

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

  const progressFinished = time-getStartTime() > (finishAfterSeconds ?? 0);

  return (
    <Card className="p-2 mt-2 hover-container">
      <div className="d-flex w-100 justify-content-between" style={{ minHeight: 31 }}>
        {name}
        <div className="show-on-hover d-flex gap-1">
          <Button variant="outline-danger" size="sm" onClick={() => remove(id)}>
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </Button>
        </div>
        <small className="hide-on-hover">{howLongAgo(time - getStartTime())}</small>
      </div>
      {finishAfterSeconds && (
        <ProgressBar className="mt-1" style={{ height: '0.5em' }} animated={isPlaying && !progressFinished} variant={progressFinished ? 'danger' : undefined} now={time-getStartTime()} max={finishAfterSeconds}></ProgressBar>
      )}
    </Card>
  );
}

export default TimerItem;
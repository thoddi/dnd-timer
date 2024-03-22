import { useCallback, useContext } from "react";
import { LogContext, TimeContext, TimerContext } from "../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: number;
  durationId?: number;
  eventId?: number;
  logId?: number;
  name: string;
  finishAtInGameTime?: number;
}

function TimerItem({ id, durationId, eventId, logId, name, finishAtInGameTime }: Props) {
  const { time } = useContext(TimeContext);
  const { list: logs } = useContext(LogContext);
  const { remove } = useContext(TimerContext);

  const getStartTime = useCallback(() => {
    if (durationId) {
      return logs.find((log) => log.durationId === durationId)?.inGameTime ?? 0;
    } else if (eventId) {
      return logs.find((log) => log.eventId === eventId)?.inGameTime ?? 0;
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
      <div style={{ paddingBottom: 5, display: 'flex'}}>
        <div>
          {name}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          {howLongAgo(time - getStartTime())}
          <button onClick={() => remove(id)}><FontAwesomeIcon icon={faXmark} color="red"></FontAwesomeIcon></button>
        </div>
      </div>
      {finishAtInGameTime && (
      <progress className={time > finishAtInGameTime ? 'complete' : undefined} value={time-getStartTime()} max={finishAtInGameTime}></progress>
      )}
    </div>
  );
}

export default TimerItem;
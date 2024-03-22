import { useCallback, useContext } from "react";
import { Timer as TimerType } from "../contexts/AppContext.type";
import { LogContext, TimeContext } from "../contexts/AppContextProvider";

interface Props {
  timer: TimerType;
}

function Timer({ timer }: Props) {
  const { time } = useContext(TimeContext);
  const { logs } = useContext(LogContext);

  const getStartTime = useCallback(() => {
    if (timer.durationId) {
      return logs.find((log) => log.durationId === timer.durationId)?.inGameTime ?? 0;
    } else if (timer.eventId) {
      return logs.find((log) => log.eventId === timer.eventId)?.inGameTime ?? 0;
    } else if (timer.logId) {
      // TODO: Þetta ætti aldrei að þurfa að uppfæra.
      return logs.find((log) => log.id === timer.logId)?.inGameTime ?? 0;
    }
    return 0;
  }, [logs, timer]);

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
          {timer.name}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          {howLongAgo(time - getStartTime())}
        </div>
      </div>
      {timer.finishAtInGameTime && (
      <progress className={time > timer.finishAtInGameTime ? 'complete' : undefined} value={time-getStartTime()} max={timer.finishAtInGameTime}></progress>
      )}
    </div>
  );
}

export default Timer;
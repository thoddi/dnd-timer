import { useContext, useState } from "react";
import Modal from "../../Modal";
import CreateDuration from "./CreateDuration";
import { LogContext, TimeContext, TimerContext } from "../../contexts/AppContextProvider";
import useLocalStorageList from "../../hooks/useLocalStorageList";
import { Duration } from "../../contexts/AppContext.type";
import CreateTimer from "../../timers/CreateTimer";

function DurationList() {
  const [isCreatingDuration, setIsCreatingDuration] = useState(false);
  const [isCreatingTimerforDuration, setIsCreatingTimer] = useState<number>();

  const [durations, addDuration] = useLocalStorageList<Duration>('timeSkip');
  const { addLog } = useContext(LogContext);
  const { time, addTime } = useContext(TimeContext);
  const { addTimer } = useContext(TimerContext);

  const applyDuration = (duration: Duration) => {
    addLog({ text: duration.name, inGameTime: time, durationId: duration.id });
    addTime(duration.duration);
  };

  return (
    <div>
      <button onClick={() => setIsCreatingDuration(true)}>Búa til tímabil</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {durations.map((duration) => (
          <div key={duration.id} style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
            {duration.name}
            <button style={{ marginLeft: 'auto' }} onClick={() => applyDuration(duration)}>Kveikja</button>
            <button onClick={() => setIsCreatingTimer(duration.id)}>Mæla</button>
          </div>
        ))}
      </div>
      {isCreatingDuration && (
        <Modal onClose={() => setIsCreatingDuration(false)}>
          <CreateDuration onAdd={addDuration}></CreateDuration>
        </Modal>
      )}
      {isCreatingTimerforDuration && (
        <Modal onClose={() => setIsCreatingTimer(undefined)}>
          <CreateTimer durationId={isCreatingTimerforDuration} onAdd={addTimer}></CreateTimer>
        </Modal>
      )}
    </div>
  );
}

export default DurationList;
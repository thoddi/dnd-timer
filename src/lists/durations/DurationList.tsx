import { useContext, useState } from "react";
import Modal from "../../Modal";
import CreateDuration from "./CreateDuration";
import { LogContext, TimeContext } from "../../contexts/AppContextProvider";
import useLocalStorageList from "../../hooks/useLocalStorageList";
import { Duration } from "../../contexts/AppContext.type";

function DurationList() {
  const [isCreating, setIsCreating] = useState(false);

  const [durations, addDuration] = useLocalStorageList<Duration>('timeSkip');
  const { addLog } = useContext(LogContext);
  const { time, addTime } = useContext(TimeContext);

  const applyDuration = (duration: Duration) => {
    addLog({ text: duration.name, inGameTime: time, durationId: duration.id });
    addTime(duration.duration);
  };

  return (
    <div>
      <button onClick={() => setIsCreating(true)}>Búa til tímabil</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {durations.map((duration) => (
          <div key={duration.id} style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
            {duration.name}
            <button style={{ marginLeft: 'auto' }} onClick={() => applyDuration(duration)}>Kveikja</button>
          </div>
        ))}
      </div>
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateDuration onAdd={addDuration}></CreateDuration>
        </Modal>
      )}
    </div>
  );
}

export default DurationList;
import { useContext, useState } from "react";
import Modal from "../Modal";
import useInGameDuration, { Duration } from "../hooks/useInGameDuration";
import CreateDuration from "../CreateDuration";
import { LogContext, TimeContext } from "../contexts/AppContextProvider";

function DurationList() {
  const [isCreating, setIsCreating] = useState(false);

  const [durations, addDuration] = useInGameDuration();
  const { addLog } = useContext(LogContext);
  const { time, addTime } = useContext(TimeContext);

  const applyDuration = (duration: Duration) => {
    addLog(duration.name, time, duration.id);
    addTime(duration.duration);
  };

  return (
    <>
      <button onClick={() => setIsCreating(true)}>Búa til tímabil</button>
      <div>
        {durations.map((duration) => (
          <button key={duration.id} onClick={() => applyDuration(duration)}>{duration.name}</button>
        ))}
      </div>
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateDuration onAdd={addDuration}></CreateDuration>
        </Modal>
      )}
    </>
  );
}

export default DurationList;
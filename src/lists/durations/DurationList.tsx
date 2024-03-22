import { useContext, useState } from "react";
import Modal from "../../Modal";
import CreateDuration from "./CreateDuration";
import { DurationContext } from "../../contexts/AppContextProvider";
import CreateTimer from "../../timers/CreateTimer";
import DurationItem from "./DurationItem";

function DurationList() {
  const [isCreatingDuration, setIsCreatingDuration] = useState(false);
  const [isCreatingTimerforDuration, setIsCreatingTimer] = useState<number>();

  const durations = useContext(DurationContext);

  return (
    <div>
      <button onClick={() => setIsCreatingDuration(true)}>Búa til tímabil</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {durations.list.map((duration) => (
          <DurationItem key={duration.id} id={duration.id} name={duration.name} duration={duration.duration}></DurationItem>
        ))}
      </div>
      {isCreatingDuration && (
        <Modal onClose={() => setIsCreatingDuration(false)}>
          <CreateDuration onAdd={durations.add}></CreateDuration>
        </Modal>
      )}
      {isCreatingTimerforDuration && (
        <Modal onClose={() => setIsCreatingTimer(undefined)}>
          <CreateTimer durationId={isCreatingTimerforDuration}></CreateTimer>
        </Modal>
      )}
    </div>
  );
}

export default DurationList;
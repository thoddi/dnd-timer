import { useContext, useState } from "react";
import CreateDurationModal from "./CreateDurationModal";
import { DurationContext } from "../../contexts/AppContextProvider";
import DurationItem from "./DurationItem";

function DurationList() {
  const [isCreatingDuration, setIsCreatingDuration] = useState(false);

  const durations = useContext(DurationContext);

  return (
    <div>
      <button onClick={() => setIsCreatingDuration(true)}>Búa til tímabil</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {durations.list.map((duration) => (
          <DurationItem key={duration.id} id={duration.id} name={duration.name} duration={duration.duration}></DurationItem>
        ))}
      </div>
      <CreateDurationModal show={isCreatingDuration} onHide={() => setIsCreatingDuration(false)}></CreateDurationModal>
    </div>
  );
}

export default DurationList;
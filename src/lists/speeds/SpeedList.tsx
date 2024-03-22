import { useContext, useState } from "react";
import Modal from "../../Modal";
import CreateSpeed from "./CreateSpeed";
import SpeedItem from "./SpeedItem";
import { SpeedContext } from "../../contexts/AppContextProvider";

function SpeedList() {
  const [isCreating, setIsCreating] = useState(false);

  const speeds = useContext(SpeedContext);

  return (
    <div>
      <h2>Spilunarhraði</h2>
      <button onClick={() => setIsCreating(true)}>Búa til hraða</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {speeds.list.map((speed) => (
          <SpeedItem key={speed.id} id={speed.id} name={speed.name} speed={speed.speed}></SpeedItem>
        ))}
      </div>
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateSpeed onAdd={speeds.add}></CreateSpeed>
        </Modal>
      )}
    </div>
  );
}

export default SpeedList;
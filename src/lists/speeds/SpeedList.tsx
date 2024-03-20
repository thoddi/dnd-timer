import { useContext, useState } from "react";
import Modal from "../../Modal";
import CreateSpeed from "./CreateSpeed";
import { TimeContext } from "../../contexts/AppContextProvider";
import useLocalStorageList from "../../hooks/useLocalStorageList";
import { Speed } from "../../contexts/AppContext.type";

function SpeedList() {
  const [isCreating, setIsCreating] = useState(false);

  const [list, add] = useLocalStorageList<Speed>('speed');
  const { setPlaySpeed } = useContext(TimeContext);

  return (
    <div>
      <h2>Spilunarhraði</h2>
      <button onClick={() => setIsCreating(true)}>Búa til hraða</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {list.map((speed) => (
          <div key={speed.id} style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
            {speed.name}
            <button style={{ marginLeft: 'auto' }} onClick={() => setPlaySpeed(speed.speed)}>Kveikja</button>
          </div>
        ))}
      </div>
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateSpeed onAdd={add}></CreateSpeed>
        </Modal>
      )}
    </div>
  );
}

export default SpeedList;
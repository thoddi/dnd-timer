import { useContext, useState } from "react";
import Modal from "../Modal";
import useInGameSpeed from "../hooks/useInGameSpeed";
import CreateSpeed from "../CreateSpeed";
import { TimeContext } from "../contexts/AppContextProvider";

function SpeedList() {
  const [isCreating, setIsCreating] = useState(false);

  const [list, add] = useInGameSpeed();
  const { setPlaySpeed } = useContext(TimeContext);

  return (
    <>
      <button onClick={() => setIsCreating(true)}>Búa til hraða</button>
      <div>
        {list.map((speed) => (
          <button key={speed.id} onClick={() => setPlaySpeed(speed.speed)}>{speed.name}</button>
        ))}
      </div>
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateSpeed onAdd={add}></CreateSpeed>
        </Modal>
      )}
    </>
  );
}

export default SpeedList;
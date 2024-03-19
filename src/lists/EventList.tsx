import { useContext, useState } from "react";
import Modal from "../Modal";
import CreateEvent from "../CreateEvent";
import useInGameEvents from "../hooks/useInGameEvents";
import { LogContext, TimeContext } from "../contexts/AppContextProvider";

function EventList() {
  const [isCreating, setIsCreating] = useState(false);

  const [events, addEvent] = useInGameEvents();
  const { addLog } = useContext(LogContext);
  const { time } = useContext(TimeContext);

  return (
    <>
      <button onClick={() => setIsCreating(true)}>Búa til atburð</button>
      <div>
        {events.map((event) => (
          <button key={event.id} onClick={() => addLog(event.name, time, undefined, event.id)}>{event.name}</button>
        ))}
      </div>
      {isCreating && (
        <Modal onClose={() => setIsCreating(false)}>
          <CreateEvent onAdd={addEvent}></CreateEvent>
        </Modal>
      )}
    </>
  );
}

export default EventList;
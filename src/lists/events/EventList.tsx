import { useContext, useState } from "react";
import Modal from "../../Modal";
import CreateEvent from "./CreateEvent";
import { LogContext, TimeContext, TimerContext } from "../../contexts/AppContextProvider";
import useLocalStorageList from "../../hooks/useLocalStorageList";
import { InGameEvent } from "../../contexts/AppContext.type";
import CreateTimer from "../../timers/CreateTimer";

function EventList() {
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);
  const [isCreatingTimerforEvent, setIsCreatingTimer] = useState<number>();

  const [events, addEvent] = useLocalStorageList<InGameEvent>('event');
  const { addLog } = useContext(LogContext);
  const { time } = useContext(TimeContext);
  const { addTimer } = useContext(TimerContext);

  return (
    <div>
      <button onClick={() => setIsCreatingEvent(true)}>Búa til atburð</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {events.map((event) => (
          <div key={event.id} style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
            {event.name}
            <button style={{ marginLeft: 'auto' }} onClick={() => addLog({ text: event.name, inGameTime: time, eventId: event.id })}>Kveikja</button>
            <button onClick={() => setIsCreatingTimer(event.id)}>Mæla</button>
          </div>
        ))}
      </div>
      {isCreatingEvent && (
        <Modal onClose={() => setIsCreatingEvent(false)}>
          <CreateEvent onAdd={addEvent}></CreateEvent>
        </Modal>
      )}
      {isCreatingTimerforEvent && (
        <Modal onClose={() => setIsCreatingTimer(undefined)}>
          <CreateTimer eventId={isCreatingTimerforEvent} onAdd={addTimer}></CreateTimer>
        </Modal>
      )}
    </div>
  );
}

export default EventList;
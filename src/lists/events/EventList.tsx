import { useContext, useState } from "react";
import Modal from "../../Modal";
import CreateEvent from "./CreateEvent";
import { EventContext } from "../../contexts/AppContextProvider";
import EventItem from "./EventItem";

function EventList() {
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);

  const events = useContext(EventContext);

  return (
    <div>
      <button onClick={() => setIsCreatingEvent(true)}>Búa til atburð</button>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {events.list.map((event) => (
          <EventItem key={event.id} id={event.id} name={event.name}></EventItem>
        ))}
      </div>
      {isCreatingEvent && (
        <Modal onClose={() => setIsCreatingEvent(false)}>
          <CreateEvent onAdd={events.add}></CreateEvent>
        </Modal>
      )}
    </div>
  );
}

export default EventList;
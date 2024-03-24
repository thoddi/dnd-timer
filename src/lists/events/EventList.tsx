import { useContext, useState } from "react";
import CreateEventModal from "./CreateEventModal";
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
      <CreateEventModal show={isCreatingEvent} onHide={() => setIsCreatingEvent(false)}></CreateEventModal>
    </div>
  );
}

export default EventList;
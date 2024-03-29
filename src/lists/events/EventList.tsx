import { useContext, useState } from "react";
import CreateEventModal from "./CreateEventModal";
import { EventContext } from "../../contexts/AppContextProvider";
import EventItem from "./EventItem";
import Card from "react-bootstrap/esm/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function EventList() {
  const [isCreating, setIsCreating] = useState(false);

  const events = useContext(EventContext);

  return (
    <div>
      <Card style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }} >
        <CardHeader className="d-flex justify-content-between p-2" style={{ borderBottom: 'none' }}>
          <h5>Viðburðir</h5>
          <Button variant="outline-secondary" size="sm" onClick={() => setIsCreating(true)}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </CardHeader>
      </Card>
      {events.list.map((event) => (
        <EventItem key={event.id} id={event.id} name={event.name}></EventItem>
      ))}
      <CreateEventModal show={isCreating} onHide={() => setIsCreating(false)}></CreateEventModal>
    </div>
  );
}

export default EventList;
import { useContext, useState } from "react";
import CreateDurationModal from "./CreateDurationModal";
import { DurationContext } from "../../contexts/AppContextProvider";
import DurationItem from "./DurationItem";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardFast, faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateOneOffDurationModal from "./CreateOneOffDurationModal";

function DurationList() {
  const [isCreating, setIsCreating] = useState(false);
  const [isSkippingForward, setSkippingForward] = useState(false);

  const durations = useContext(DurationContext);

  return (
    <div>
      <Card style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }} >
        <CardHeader className="d-flex justify-content-between p-2" style={{ borderBottom: 'none' }}>
          <h5>Tímabil</h5>
          <div>
            <Button className="me-1" variant="outline-success" size="sm" onClick={() => setSkippingForward(true)}>
              <FontAwesomeIcon icon={faForwardFast}></FontAwesomeIcon>
            </Button>
            <Button variant="outline-secondary" size="sm" onClick={() => setIsCreating(true)}>
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </Button>
          </div>
        </CardHeader>
      </Card>
      {durations.list.map((duration) => (
        <DurationItem key={duration.id} id={duration.id} name={duration.name} duration={duration.duration}></DurationItem>
      ))}
      <CreateDurationModal show={isCreating} onHide={() => setIsCreating(false)}></CreateDurationModal>      
      <CreateOneOffDurationModal show={isSkippingForward} onHide={() => setSkippingForward(false)}></CreateOneOffDurationModal>
    </div>
  );
}

export default DurationList;
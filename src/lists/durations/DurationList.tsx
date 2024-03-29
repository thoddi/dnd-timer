import { useContext, useState } from "react";
import CreateDurationModal from "./CreateDurationModal";
import { DurationContext } from "../../contexts/AppContextProvider";
import DurationItem from "./DurationItem";
import Card from "react-bootstrap/esm/Card";
import Button from "react-bootstrap/esm/Button";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DurationList() {
  const [isCreating, setIsCreating] = useState(false);

  const durations = useContext(DurationContext);

  return (
    <div>
      <Card style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }} >
        <CardHeader className="d-flex justify-content-between p-2" style={{ borderBottom: 'none' }}>
          <h5>Tímabil</h5>
          <Button variant="outline-secondary" size="sm" onClick={() => setIsCreating(true)}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </CardHeader>
      </Card>
      {durations.list.map((duration) => (
        <DurationItem key={duration.id} id={duration.id} name={duration.name} duration={duration.duration}></DurationItem>
      ))}
      <CreateDurationModal show={isCreating} onHide={() => setIsCreating(false)}></CreateDurationModal>
    </div>
  );
}

export default DurationList;
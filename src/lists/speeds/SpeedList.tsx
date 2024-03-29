import { useContext, useState } from "react";
import CreateSpeedModal from "./CreateSpeedModal";
import SpeedItem from "./SpeedItem";
import { SpeedContext } from "../../contexts/AppContextProvider";
import Card from "react-bootstrap/esm/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function SpeedList() {
  const [isCreating, setIsCreating] = useState(false);

  const speeds = useContext(SpeedContext);

  return (
    <div>
      <Card style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }} >
        <CardHeader className="d-flex justify-content-between p-2" style={{ borderBottom: 'none' }}>
          <h5>Spilunarhraði</h5>
          <Button variant="outline-secondary" size="sm" onClick={() => setIsCreating(true)}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </Button>
        </CardHeader>
      </Card>
        {speeds.list.map((speed) => (
          <SpeedItem key={speed.id} id={speed.id} name={speed.name} speed={speed.speed}></SpeedItem>
        ))}
      <CreateSpeedModal show={isCreating} onHide={() => setIsCreating(false)}></CreateSpeedModal>
    </div>
  );
}

export default SpeedList;
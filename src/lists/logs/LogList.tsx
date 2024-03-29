import { useContext, useState } from "react";
import CreateLogModal from "./CreateLogModal";
import { LogContext } from "../../contexts/AppContextProvider";
import LogItem from "./LogItem";
import List from "../../utilityComponents/list/List";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardHeader from "react-bootstrap/CardHeader";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function LogList() {
  const [isCreating, setIsCreating] = useState(false);
  const logs = useContext(LogContext);

  return (
    <div className="logs">
      <Card>
        <CardHeader className="d-flex justify-content-between p-2">
          <h5>Atburðir</h5>
          <Button variant="outline-secondary" size="sm" onClick={() => setIsCreating(true)}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></Button>
        </CardHeader>
        <CardBody className="p-0">
          <List variant="flush">
            {[...logs.list].reverse().map((log) => (
              <List.Item key={log.id} className="p-0">
                <LogItem id={log.id} text={log.text} inGameTime={log.inGameTime}></LogItem>
              </List.Item>
            ))}
          </List>
        </CardBody>
      </Card>    
      <CreateLogModal show={isCreating} onHide={() => setIsCreating(false)}></CreateLogModal>
    </div>
  );
}

export default LogList;
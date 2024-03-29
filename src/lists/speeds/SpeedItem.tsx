import { useContext } from "react";
import { SpeedContext, TimeContext } from "../../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/esm/Card";
import { Button } from "react-bootstrap";

interface Props {
  id: number;
  name: string;
  speed: number;
}

function SpeedItem({ id, name, speed }: Props) {
  const { setPlaySpeed } = useContext(TimeContext);
  const { remove } = useContext(SpeedContext);

  return (
    <Card className="p-2 mt-2">
      <div className="d-flex w-100 justify-content-between">
        <div>
          <Button variant="outline-success" size="sm" onClick={() => setPlaySpeed(speed)}>
            <FontAwesomeIcon icon={faPlay}></FontAwesomeIcon>
          </Button>
          &ensp;{name}
        </div>
        <Button variant="outline-danger" size="sm" onClick={() => remove(id)}>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </Button>
      </div>
    </Card>
  );
}

export default SpeedItem;
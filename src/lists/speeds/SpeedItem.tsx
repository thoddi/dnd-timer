import { useContext } from "react";
import { SpeedContext, TimeContext } from "../../contexts/AppContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: number;
  name: string;
  speed: number;
}

function SpeedItem({ id, name, speed }: Props) {
  const { setPlaySpeed } = useContext(TimeContext);
  const { remove } = useContext(SpeedContext);

  return (
    <div style={{ display: 'flex', margin: 5, padding: 5, border: '1px solid grey', borderRadius: 5 }}>
      {name}
      <button style={{ marginLeft: 'auto' }} onClick={() => setPlaySpeed(speed)}>Kveikja</button>
      
      <button onClick={() => remove(id)}><FontAwesomeIcon icon={faXmark} color="red"></FontAwesomeIcon></button>
    </div>
  );
}

export default SpeedItem;
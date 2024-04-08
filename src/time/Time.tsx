import { useContext } from "react"
import { TimeContext } from "../contexts/AppContextProvider";
import Clock from "./Clock";
import Button from "react-bootstrap/esm/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import "./day-phase-display";

function Time() {
  const { time, isPlaying, setPlaySpeed } = useContext(TimeContext);

  const formatTime = (secondCount: number) => {
    const seconds = secondCount % 60;
    const minuteCount = Math.floor(secondCount / 60);
    const minutes = minuteCount % 60;
    const hourCount = Math.floor(minuteCount / 60);
    const hours = hourCount % 24;
    const days = Math.floor(hourCount / 24);

    return `${days} dagar, ${hours} klukkutímar, ${minutes} mínútur og ${seconds} sekúndur`;
  };

  return (
    <div className="time d-flex flex-column align-items-center">
      {/* <day-phase-display></day-phase-display> */}
      {formatTime(time)}
      <Clock></Clock>
      <div>
        {isPlaying ? (
          <Button variant="danger" onClick={() => setPlaySpeed(0)}><FontAwesomeIcon icon={faPause}></FontAwesomeIcon></Button>
        ) : (
          <Button variant="success" onClick={() => setPlaySpeed(1)}><FontAwesomeIcon icon={faPlay}></FontAwesomeIcon></Button>
        )}
      </div>
    </div>
  );
}

export default Time;
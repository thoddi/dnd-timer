import { useContext } from "react"
import { TimeContext } from "../contexts/AppContextProvider";

function Time() {
  const { time, setPlaySpeed } = useContext(TimeContext);

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
    <div className="time">
      {formatTime(time)}
      <div>
        <button onClick={() => setPlaySpeed(0)}>Pause</button>
        <button onClick={() => setPlaySpeed(1)}>Play</button>
      </div>
    </div>
  );
}

export default Time;
import { useContext } from "react";
import { TimeContext } from "../contexts/AppContextProvider";
import { unitsOfTime } from "../unitsOfTime";

function Clock() {
  const { time } = useContext(TimeContext);

  const secondsPassedInDay = time % unitsOfTime.days.seconds;
  const hours =  Math.floor((secondsPassedInDay / unitsOfTime.hours.seconds) % 24);
  const minutes = Math.floor((secondsPassedInDay / unitsOfTime.minutes.seconds) % 60);
  
  // Pad numbers with a leading zero if needed
  const formatNumber = (number: number) => (number < 10 ? `0${number}` : number);

  return (
    <div style={{ fontSize: 'xxx-large' }}>
      {formatNumber(hours)}:
      {formatNumber(minutes)}
    </div>
  );
}

export default Clock;
import { useEffect, useState } from "react";

const key = 'time';

function useInGameTime(): [number, (speed: number) => void, (duration: number) => void] {
  const [time, setTime] = useState(() => Number(localStorage.getItem(key)));
  const [inGamePlaySpeed, setInGamePlaySpeed] = useState(0);

  const setPlaySpeed = (speed: number) => {
    setInGamePlaySpeed(speed);
  }

  const addTime = (seconds: number) => {
    setTime(time + seconds);
  }

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (inGamePlaySpeed) {
      intervalId = setInterval(() => setTime((it) => {
        const newTime = it + 1;
        localStorage.setItem(key, newTime.toString());
        return newTime;
      }), 1000 / inGamePlaySpeed);
    }
    return () => clearInterval(intervalId);
  }, [inGamePlaySpeed])

  return [time, setPlaySpeed, addTime];
}

export default useInGameTime;
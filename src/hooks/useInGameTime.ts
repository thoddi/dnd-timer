import { useEffect, useState } from "react";

const key = 'time';

function useInGameTime(): [number, boolean, (speed: number) => void, (duration: number) => number] {
  const [time, setTime] = useState(() => Number(localStorage.getItem(key)));
  const [inGamePlaySpeed, setInGamePlaySpeed] = useState(0);

  const setPlaySpeed = (speed: number) => {
    setInGamePlaySpeed(speed);
  }

  /**
   * Adds a duration to the current time and saves it in local storage.
   * @param seconds Seconds to add to time.
   * @returns The new time after adding duration.
   */
  const addTime = (seconds: number): number => {
    const newTime = time + seconds;
    setTime(newTime);
    return newTime;
  };

  useEffect(() => {
    let intervalId: number;
    const maxUpdatesPerSecond = 4;
    const updatesPerSecond = inGamePlaySpeed > maxUpdatesPerSecond ? maxUpdatesPerSecond : inGamePlaySpeed;
    const timeStep = updatesPerSecond === maxUpdatesPerSecond ? inGamePlaySpeed / updatesPerSecond : 1;
    if (inGamePlaySpeed) {
      intervalId = setInterval(() => setTime((it) => {
        const newTime = it + timeStep;
        localStorage.setItem(key, newTime.toString());
        return newTime;
      }), 1000 / updatesPerSecond);
    }
    return () => clearInterval(intervalId);
  }, [inGamePlaySpeed])

  return [time, inGamePlaySpeed !== 0, setPlaySpeed, addTime];
}

export default useInGameTime;
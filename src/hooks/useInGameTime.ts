import { useEffect, useState } from "react";
import useInGameDuration from "./useInGameDuration";
import StoreService from "../StoreService/StoreService";

function useInGameTime(): [number, (speed: number) => void, (duration: number) => void] {
  const [time, setTime] = useState(0);
  const [inGamePlaySpeed, setInGamePlaySpeed] = useState(0);

  const [durationList] = useInGameDuration();

  const setPlaySpeed = (speed: number) => {
    setInGamePlaySpeed(speed);
  }

  const addTime = (durationId: number) => {
    const duration = durationList.find((d) => d.id = durationId);
    if (duration) {
      setTime(time + duration.duration);
    }
  }

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (inGamePlaySpeed) {
      intervalId = setInterval(() => setTime((it) => {
        const newTime = it + 1;
        StoreService.setTime(newTime);
        return newTime;
      }), 1000 / inGamePlaySpeed);
    }
    return () => clearInterval(intervalId);
  }, [inGamePlaySpeed])

  useEffect(() => {
    setTime(StoreService.getTime());
  }, []);

  return [time, setPlaySpeed, addTime];
}

export default useInGameTime;
import { useEffect, useState } from "react";
import Sequence from "../storeService/Sequence";
export interface Duration {
  id: number;
  name: string;
  duration: number;
}

function useInGameDuration(): [Duration[], (name: string, duration: number) => void] {
  const key = 'timeSkip';
  const [list, setList] = useState<Duration[]>([]);

  const get = () => {
    const jsonList = localStorage.getItem(key);
    if (jsonList) {
      return JSON.parse(jsonList) as Duration[];
    }
    return [];
  };

  const add = (name: string, duration: number) => {
    const model = { id: Sequence.next, name, duration } as Duration;
    let list = get();
    list.push(model);
    localStorage.setItem(key, JSON.stringify(list));
    setList(list);
  }

  useEffect(() => {
    setList(get());
  }, []);

  return [list, add];
}

export default useInGameDuration;
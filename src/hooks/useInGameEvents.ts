import { useEffect, useState } from "react";
import Sequence from "../storeService/Sequence";

export interface InGameEvent {
  id: number;
  name: string;
}

function useInGameEvents(): [InGameEvent[], (name: string) => void] {
  const key = 'event';
  const [list, setList] = useState<InGameEvent[]>([]);

  const get = () => {
    const jsonList = localStorage.getItem(key);
    if (jsonList) {
      return JSON.parse(jsonList) as InGameEvent[];
    }
    return [];
  };

  const add = (name: string) => {
    const model = { id: Sequence.next, name } as InGameEvent;
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

export default useInGameEvents;
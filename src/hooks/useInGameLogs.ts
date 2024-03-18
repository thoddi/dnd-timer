import { useEffect, useState } from "react";
import Sequence from "../storeService/Sequence";

export interface Log {
  id: number;
  text: string;
  inGameTime: number;
  durationId?: number;
  eventId?: number;
}
function useInGameLogs(): [Log[], (text: string, inGameTime: number, durationId?: number, eventId?: number) => void] {
  const key = 'logs';
  const [list, setList] = useState<Log[]>([]);

  const get = () => {
    const jsonList = localStorage.getItem(key);
    if (jsonList) {
      return JSON.parse(jsonList) as Log[];
    }
    return [];
  };

  const add = (text: string, inGameTime: number, durationId?: number, eventId?: number) => {
    const model = { id: Sequence.next, text, inGameTime, durationId, eventId } as Log;
    let list = get();
    list.push(model);
    localStorage.setItem(key, JSON.stringify(list));
    setList(list);
  }

  useEffect(() => {
    setList(get());
    const listener = window.addEventListener('storage', (event) => {
      if (event.key === key) {
        setList(get());
      }
    });
    return listener;
  }, []);

  return [list, add];
}

export default useInGameLogs;
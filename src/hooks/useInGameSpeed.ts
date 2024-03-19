import { useEffect, useState } from "react";
import Sequence from "../storeService/Sequence";

export interface Speed {
  id: number;
  name: string;
  speed: number;
}


function useInGameSpeed(): [Speed[], (name: string, speed: number) => void] {
  const key = 'speed';
  const [list, setList] = useState<Speed[]>([]);

  const get = () => {
    const jsonList = localStorage.getItem(key);
    if (jsonList) {
      return JSON.parse(jsonList) as Speed[];
    }
    return [];
  };

  const add = (name: string, speed: number) => {
    const model = { id: Sequence.next, name, speed } as Speed;
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

export default useInGameSpeed;
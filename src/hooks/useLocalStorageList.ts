import { useState } from "react";
import Sequence from "../contexts/Sequence";

type HasId = {
  id: number
}

export type Create<T extends { id: number }> = Omit<T, "id">;

function useLocalStorageList<T extends HasId>(key: string): [T[], (item: Create<T>) => void] {
  const [list, setList] = useState<T[]>(JSON.parse(localStorage.getItem(key) ?? '[]'));
  const sequence = new Sequence(key);

  const add = (item: Create<T>) => {
    const model = { id: sequence.next, ...item } as T;
    const newList = [...list, model];
    localStorage.setItem(key, JSON.stringify(newList));
    setList(newList);
  }

  return [list, add];
}

export default useLocalStorageList;
import { useState } from "react";
import Sequence from "../contexts/Sequence";

interface HasId {
  id: number
}

type Create<T extends { id: number }> = Omit<T, "id">;

export type AddFunction<T extends HasId> = (item: Create<T>) => void;
type RemoveFunction = (id: number) => void;

export interface LocalStorageInterface<T extends HasId> {
  list: T[];
  add: AddFunction<T>;
  remove: RemoveFunction;
}

function useLocalStorageList<T extends HasId>(key: string): LocalStorageInterface<T> {
  const [list, setList] = useState<T[]>(JSON.parse(localStorage.getItem(key) ?? '[]'));
  const sequence = new Sequence(key);

  const replaceList = (newList: T[]) => {
    localStorage.setItem(key, JSON.stringify(newList));
    setList(newList);
  };

  const add = (item: Create<T>) => {
    const model = { id: sequence.next, ...item } as T;
    const newList = [...list, model];
    replaceList(newList);
  }

  const remove = (id: number) => {
    const newList = list.filter((it) => it.id !== id);
    replaceList(newList);
  }

  return { list, add, remove };
}

export default useLocalStorageList;
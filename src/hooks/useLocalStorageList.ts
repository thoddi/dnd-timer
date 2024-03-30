import { useState } from "react";
import Sequence from "../contexts/Sequence";

interface HasId {
  id: number
}

export type Create<T extends { id: number }> = Omit<T, "id">;

export type AddFunction<T extends HasId> = (item: Create<T>) => number;
type RemoveFunction = (id: number) => void;

export interface StorageInterface<T extends HasId> {
  list: T[];
  /**
   * Adds an item to the storage. Returns its new ID.
   * @param item - The item to add.
   * @returns The ID of the added item.
   */
  add: AddFunction<T>;
  remove: RemoveFunction;
}

function useLocalStorageList<T extends HasId>(key: string): StorageInterface<T> {
  const sequence = new Sequence(key);
  const [list, setList] = useState<T[]>(JSON.parse(localStorage.getItem(key) || '[]'));

  const add = (item: Create<T>): number => {
    const model = { id: sequence.nextValue, ...item } as T;
    setList((oldList) => {
      const newList = [...oldList, model];
      localStorage.setItem(key, JSON.stringify(newList));
      return newList;
    });
    return model.id;
  };

  const remove = (id: number) => {
    setList((oldList) => {
      const newList = oldList.filter((it) => it.id !== id);
      localStorage.setItem(key, JSON.stringify(newList));
      return newList;
    });
  };

  return { list, add, remove };
}

export default useLocalStorageList;
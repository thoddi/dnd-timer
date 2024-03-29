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

/**
 * Sækir núverandi stöðu í localstorage og skilar.
 * @param key Lykill að gildi í localstorage.
 * @param sequence Object sem heldur utanum næsta raðnúmer.
 * @param initialState Ef ekkert gildi er til í localstorage, þá er þetta vistað sem fyrsta gildi.
 * @returns Listi.
 */
const setInitialState = (key: string, sequence: Sequence, initialState?: Create<any>[]) => {
  const storedState = localStorage.getItem(key);
  if (storedState === null) {
    if (initialState) {
      const newState = initialState.map((it) => ({ id: sequence.nextValue, ...it}));
      localStorage.setItem(key, JSON.stringify(newState));
      return newState;
    }
    return [];
  }
  return JSON.parse(storedState);
};

function useLocalStorageList<T extends HasId>(key: string, initialState?: Create<T>[]): StorageInterface<T> {
  const sequence = new Sequence(key);
  const [list, setList] = useState<T[]>(setInitialState(key, sequence, initialState));

  const replaceList = (newList: T[]) => {
    localStorage.setItem(key, JSON.stringify(newList));
    setList(newList);
  };

  const add = (item: Create<T>): number => {
    const model = { id: sequence.nextValue, ...item } as T;
    const newList = [...list, model];
    replaceList(newList);
    return model.id;
  };

  const remove = (id: number) => {
    const newList = list.filter((it) => it.id !== id);
    replaceList(newList);
  };

  return { list, add, remove };
}

export default useLocalStorageList;
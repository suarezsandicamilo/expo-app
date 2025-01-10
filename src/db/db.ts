//

// Expo

import { Storage } from 'expo-sqlite/kv-store';

// App

const set = async <T>(key: string, value: T) => {
  await Storage.setItemAsync(key, JSON.stringify(value));
};

const get = async <T>(key: string, def?: T): Promise<T> => {
  const v = await Storage.getItemAsync(key);

  if (v == undefined) {
    if (def == undefined) {
      throw new Error(`The key ${key} is not defined`);
    } else {
      return def;
    }
  }

  return JSON.parse(v);
};

const remove = async (key: string) => {
  await Storage.removeItemAsync(key);
};

export const Db = {
  set,
  get,
  remove,
};

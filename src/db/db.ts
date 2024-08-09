//

// Async Storage

import AsyncStorage from '@react-native-async-storage/async-storage';

// App

const set = async <T>(key: string, value: T) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

const get = async <T>(key: string, def: T): Promise<T> => {
  try {
    const v = await AsyncStorage.getItem(key);

    if (v == undefined) {
      return def;
    }

    return JSON.parse(v);
  } catch (e) {
    console.error(e);
  }

  return def;
};

const remove = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};

export const Db = {
  set,
  get,
  remove,
};

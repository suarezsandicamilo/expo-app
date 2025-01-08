//

// App

import { Lesson } from './types';

export type RootStackParamList = {
  home: undefined;
  lesson: { lesson: Lesson };
  end: undefined;
};

export const delay = (ms: number) => {
  return new Promise<number>((resolve) => {
    return setTimeout(resolve, ms);
  });
};

export const mod = <T>(array: T[], index: number) => {
  const m = index - array.length * Math.floor(index / array.length);

  return array[m];
};

export const random = (min: number, max: number) => {
  // eslint-disable-next-line sonarjs/pseudo-random
  const r = Math.random();

  return Math.floor(r * (max - min) + min);
};

export const shuffle = <T>(array: T[]) => {
  const result = [...array];

  for (let i = 0; i < result.length; i++) {
    const j = random(0, i);

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

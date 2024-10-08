//

// Expo

import * as Speech from 'expo-speech';

// App

import { useLock } from './lock';

export const useSpeech = () => {
  const lock = useLock();

  const speak = (text?: string) => {
    return new Promise<void>((resolve, reject) => {
      if (!text) {
        resolve();

        return;
      }

      lock.setIsLocked(true);

      Speech.speak(text, {
        language: 'es',

        onError: (error) => {
          lock.setIsLocked(false);

          reject(error);
        },

        onDone: () => {
          lock.setIsLocked(false);

          resolve();
        },
      });
    });
  };

  return { speak };
};

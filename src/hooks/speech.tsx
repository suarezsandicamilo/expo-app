//

// Expo

import * as Speech from 'expo-speech';

// App

import { useLock } from './lock';

type SpeechVariant = 'esc' | 'esd' | 'esf' | 'sfb';

export const useSpeech = () => {
  const lock = useLock();

  const speak = (text?: string, variant: SpeechVariant = 'esc') => {
    return new Promise<void>((resolve, reject) => {
      if (!text) {
        resolve();

        return;
      }

      lock.setIsLocked(true);

      Speech.speak(text, {
        voice: `es-us-x-${variant}-local`,

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

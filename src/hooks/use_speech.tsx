//

// Expo

import * as Speech from 'expo-speech';

// App

import { Db } from '@/db';
import { useLock } from './use_lock';

export const useSpeech = () => {
  const { setIsLocked } = useLock();

  const speak = async (...texts: string[]) => {
    const voice = await Db.get<string>('voice');

    return new Promise<void>((resolve, reject) => {
      setIsLocked(true);

      let index = 0;

      for (const text of texts) {
        Speech.speak(text, {
          voice,
          onDone: () => {
            if (index === texts.length - 1) {
              setIsLocked(false);
              resolve();
            }

            index++;
          },
          onError: (error) => {
            console.warn(error);

            setIsLocked(false);
            reject(error);
          },
        });
      }
    });
  };

  return {
    speak,
  };
};

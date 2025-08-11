//

// Expo

import { Audio } from 'expo-av';

// App

import { delay } from '@/shared';
import { SoundKey, Sounds } from '@/../assets/sounds';
import { useLock } from './use_lock';

export const useAudio = () => {
  const { setIsLocked } = useLock();

  const play = async (key: SoundKey, ms = 1000) => {
    try {
      const source = Sounds[key];

      if (!source) {
        throw new Error(`Sound not found: ${key}`);
      }

      const sound = new Audio.Sound();

      const status = await sound.loadAsync(source, {
        volume: 1,
      });

      if (!status.isLoaded) {
        throw new Error(`Sound not found: ${key}`);
      }

      setIsLocked(true);

      await sound.playAsync();

      await delay(ms);

      await sound.unloadAsync();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLocked(false);
    }
  };

  return {
    play,
  };
};

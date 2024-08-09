//

// React

import { useEffect, useState } from 'react';

// Expo

import { Audio } from 'expo-av';

// App

import { useLock } from './lock';

import { delay } from '@/_';

import { sounds } from '@/../assets/sounds';

export const useSound = (name: keyof typeof sounds) => {
  const [sound, setSound] = useState<Audio.Sound | undefined>();

  const { setIsLocked } = useLock();

  useEffect(() => {
    return () => {
      if (sound != undefined) {
        sound.unloadAsync().then();
      }
    };
  }, [sound]);

  const play = async () => {
    const source = sounds[name];

    const { sound } = await Audio.Sound.createAsync(source);

    setSound(sound);

    setIsLocked(true);

    const status = await sound.playAsync();

    if (status.isLoaded) {
      await delay(status.durationMillis ?? 500);

      setIsLocked(false);
    }
  };

  return { play };
};

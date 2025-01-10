//

// React Native

import { Animated, StyleSheet, useAnimatedValue } from 'react-native';

// App

import { Colors } from '@/constants';
import { LockPressable } from './lock_pressable';
import { useEffect } from 'react';

type Props = {
  pressed: boolean;
  onPress?: () => void;
};

export const Pop = (props: Props) => {
  const anim = useAnimatedValue(1);

  useEffect(() => {
    if (props.pressed) {
      Animated.timing(anim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [anim, props.pressed]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: anim,
          },
        ],
      }}
    >
      <LockPressable style={styles.container} onPress={props.onPress} />
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors['theme-4-light'],
    borderColor: Colors['theme-4'],
    borderWidth: 2,
    borderRadius: 36,
    elevation: 2,
    height: 72,
    justifyContent: 'center',
    opacity: 0.5,
    width: 72,
  },
});

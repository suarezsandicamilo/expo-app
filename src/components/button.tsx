//

// React Native

import { StyleSheet, Text } from 'react-native';

// App

import { Colors } from '@/constants';
import { LockPressable } from './lock_pressable';

type Props = {
  text: string;
  active?: boolean;
  onPress?: () => void;
};

export const Button = (props: Props) => {
  return (
    <LockPressable
      onPress={props.onPress}
      style={(state) => {
        const active = props.active ?? true;

        return [styles.container, active && state.pressed && styles.pressed];
      }}
    >
      <Text style={styles.text}>{props.text}</Text>
    </LockPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors['theme-1'],
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    width: 192,
  },
  pressed: {
    backgroundColor: Colors['theme-1-dark'],
  },
  text: {
    color: Colors['text-2'],
    fontFamily: 'PatrickHand',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

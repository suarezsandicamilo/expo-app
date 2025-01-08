//

// React Native

import { StyleSheet } from 'react-native';

// App

import { Colors } from '@/constants';
import { LockPressable } from './lock_pressable';
import { Icon } from './icon';

type Props = {
  pressed: boolean;
  onPress?: () => void;
};

export const Pop = (props: Props) => {
  const color_1 = !props.pressed ? Colors['theme-1'] : Colors['text-2'];
  const color_2 = !props.pressed ? Colors['text-2'] : Colors['theme-1'];

  return (
    <LockPressable
      style={[
        styles.container,
        {
          backgroundColor: color_1,
        },
      ]}
      onPress={props.onPress}
    >
      <Icon color={color_2} name="star" size={36} />
    </LockPressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 36,
    height: 72,
    justifyContent: 'center',
    width: 72,
  },
});

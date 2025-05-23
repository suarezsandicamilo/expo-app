//

// React Native

import {
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

// Expo

import { MaterialIcons } from '@expo/vector-icons';

// App

import { Colors } from '@/constants';
import { Icon } from './icon';
import { LockPressable } from './lock_pressable';

type StylePropFn = (state: PressableStateCallbackType) => StyleProp<ViewStyle>;

type Props = {
  color?: string;
  name?: keyof typeof MaterialIcons.glyphMap;
  size?: number;
  style?: StyleProp<ViewStyle> | StylePropFn;
  onPress?: () => void;
};

export const IconButton = (props: Props) => {
  const size = props.size != undefined ? props.size : 48;

  return (
    <LockPressable
      onPress={props.onPress}
      style={(state) => {
        let style = props.style;

        if (style != undefined && typeof style !== 'object') {
          const fn = style as StylePropFn;

          style = fn(state);
        }

        return [
          styles.container,
          props.onPress != undefined && state.pressed && styles.pressed,
          style,
          {
            height: size,
            width: size,
          },
        ];
      }}
    >
      <Icon color={props.color} name={props.name} size={size * 0.5} />
    </LockPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors['theme-1'],
    borderRadius: 12,
    justifyContent: 'center',
  },
  pressed: {
    backgroundColor: Colors['theme-1-dark'],
  },
});

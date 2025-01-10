//

// React Native

import {
  GestureResponderEvent,
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';

// App

import { useLock } from '@/hooks';

type StylePropFn = (state: PressableStateCallbackType) => StyleProp<ViewStyle>;

type OnPressFn = (event: GestureResponderEvent) => void;

type Props = React.PropsWithChildren<{
  style?: StyleProp<ViewStyle> | StylePropFn;
  onPress?: OnPressFn;
  onPressIn?: OnPressFn;
  onPressOut?: OnPressFn;
}>;

export const LockPressable = (props: Props) => {
  const { isLocked } = useLock();

  return (
    <Pressable
      style={(state) => {
        if (props.style == undefined) {
          return;
        }

        if (typeof props.style === 'object') {
          return props.style;
        }

        const fn = props.style as StylePropFn;

        return fn({
          pressed: !isLocked && state.pressed,
        });
      }}
      onPress={(event) => {
        if (!isLocked && props.onPress) {
          props.onPress(event);
        }
      }}
      onPressIn={(event) => {
        if (!isLocked && props.onPressIn) {
          props.onPressIn(event);
        }
      }}
      onPressOut={(event) => {
        if (!isLocked && props.onPressOut) {
          props.onPressOut(event);
        }
      }}
    >
      {props.children}
    </Pressable>
  );
};

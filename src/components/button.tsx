//

// React Native

import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

// App

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#8bc34a',
    borderColor: '#9e9e9e',
    borderRadius: 8,
    borderWidth: 1,
    elevation: 2,
    justifyContent: 'center',
    margin: 8,
  },
  pressed: {
    backgroundColor: '#689f38',
  },
});

type Props = React.PropsWithChildren<{
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}>;

export const Button = (props: Props) => {
  const size = props.size ?? 256;

  return (
    <Pressable
      style={(state) => {
        return [
          styles.container,
          {
            height: size,
            width: size,
          },
          props.style,
          state.pressed ? styles.pressed : {},
        ];
      }}
      onPress={props.onPress}
    >
      {props.children}
    </Pressable>
  );
};

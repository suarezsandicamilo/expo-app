//

// React Native

import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

// App

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#9e9e9e',
    borderRadius: 8,
    borderWidth: 1,
    elevation: 2,
    justifyContent: 'center',
    margin: 8,
  },
});

type Props = React.PropsWithChildren<{
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
}>;

export const Card = (props: Props) => {
  const size = props.size ?? 256;

  return (
    <Pressable
      style={[
        styles.container,
        {
          height: size,
          width: size,
        },
        props.style,
      ]}
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
    >
      {props.children}
    </Pressable>
  );
};

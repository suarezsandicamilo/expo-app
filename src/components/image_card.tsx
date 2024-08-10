//

// React

import { useState } from 'react';

// React Native

import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

// App

import { Card } from './card';

const styles = StyleSheet.create({
  image: {
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.9,
  },
});

type Props = React.PropsWithChildren<{
  image: ImageSourcePropType;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}>;

export const ImageCard = (props: Props) => {
  const [pressed, setPressed] = useState(false);

  const size = props.size ?? 256;

  return (
    <Card
      size={size}
      style={props.style}
      onPress={props.onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <Image
        source={props.image}
        style={[
          styles.image,
          {
            height: size,
            width: size,
          },
          pressed ? styles.pressed : {},
        ]}
      />
    </Card>
  );
};

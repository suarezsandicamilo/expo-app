//

// React Native

import { ImageBackground, StyleSheet } from 'react-native';

type Props = React.PropsWithChildren<{
  opacity?: number;
}>;

export const Cover = (props: Props) => {
  return (
    <ImageBackground
      imageStyle={{
        opacity: props.opacity ?? 1,
      }}
      source={require('@/../assets/background_2.png')}
      style={styles.cover}
      resizeMode="cover"
    >
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cover: {
    alignItems: 'center',
    flex: 1,
    gap: 24,
    justifyContent: 'center',
  },
});

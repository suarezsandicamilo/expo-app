//

// React Native

import { Image as I, StyleSheet, Text, View } from 'react-native';

// App

import { ImageKey, Images } from '@/../assets/images';

type Props = {
  source: ImageKey;
  size?: number;
};

export const Image = (props: Props) => {
  const size = props.size ?? 192;

  const source = Images[props.source];

  if (!source) {
    return (
      <View
        style={[
          styles.container,
          {
            height: size,
            width: size,
          },
        ]}
      >
        <Text style={styles.text}>{props.source}</Text>
      </View>
    );
  }

  return (
    <I
      source={Images[props.source]}
      style={[
        styles.container,
        {
          height: size,
          width: size,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    gap: 24,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'PatrickHand',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

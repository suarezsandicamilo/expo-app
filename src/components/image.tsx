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
    <View
      style={[
        styles.container,
        {
          height: size,
          width: size,
        },
      ]}
    >
      <I
        source={Images[props.source]}
        style={[
          styles.image,
          {
            height: size - 24,
            width: size - 24,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: '#e0e0e0',
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 12,
  },
  image: {
    resizeMode: 'center',
  },
  text: {
    fontFamily: 'PatrickHand',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

//

// React Native

import { Image, StyleSheet, View } from 'react-native';

// App

import { Card, SpeechView } from '@/components';

import { useSound } from '@/hooks';

import { delay } from '@/_';

import { getImage, images } from '@/../assets/images';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    borderRadius: 8,
    height: 256,
    width: 256,
  },
});

type Props = {
  next: () => void;
  text?: string;
  image?: keyof typeof images;
};

export const TapTask = (props: Props) => {
  const correct = useSound('correct');

  return (
    <View style={styles.container}>
      <Card>
        <SpeechView
          speech={props.text}
          onPress={() => {
            correct.play();

            delay(1250).then(() => {
              props.next();
            });
          }}
        >
          <Image style={styles.image} source={getImage(props.image)} />
        </SpeechView>
      </Card>
    </View>
  );
};

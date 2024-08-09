//

// React Native

import { Image, StyleSheet, View } from 'react-native';

// App

import { Card } from '@/components';

import { useSound, useSpeech } from '@/hooks';

import { getImage, ImageSource } from '@/../assets/images';

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
  image?: ImageSource;
  feedback?: string;
};

export const TapTask = (props: Props) => {
  const correct = useSound('correct');

  const { speak } = useSpeech();

  return (
    <View style={styles.container}>
      <Card
        onPress={async () => {
          await speak(props.text);

          await speak(props.feedback);

          await correct.play();

          props.next();
        }}
      >
        <Image style={styles.image} source={getImage(props.image)} />
      </Card>
    </View>
  );
};

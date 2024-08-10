//

// React Native

import { StyleSheet, View } from 'react-native';

// App

import { ImageCard } from '@/components';

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
      <ImageCard
        image={getImage(props.image)}
        onPress={async () => {
          await speak(props.text, 'esd');

          await correct.play();

          await speak(props.feedback);

          props.next();
        }}
      />
    </View>
  );
};

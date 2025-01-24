//

// React Native

import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

// App

import { ImageButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
import { ImageKey } from '../../assets/images';

type Props = {
  buttons: {
    text: string;
    image?: string;
  }[];
  feedback: {
    correct: string[];
  };
  next: () => void;
};

export const SuperTapTask = (props: Props) => {
  const anim = useAnimatedValue(-500);

  const { play } = useAudio();

  const { speak } = useSpeech();

  return (
    <View style={styles.container}>
      <ImageButton
        source={(props.buttons[0].image ?? props.buttons[0].text) as ImageKey}
        size={192}
        onPress={async () => {
          await speak(props.buttons[0].text);

          Animated.timing(anim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: false,
          }).start();
        }}
      />
      <Animated.View
        style={{
          transform: [
            {
              translateX: anim,
            },
          ],
        }}
      >
        <ImageButton
          source={(props.buttons[1].image ?? props.buttons[1].text) as ImageKey}
          size={192}
          onPress={async () => {
            await speak(props.buttons[1].text);

            await play('correct');

            await speak(...props.feedback.correct);

            props.next();
          }}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    width: '100%',
  },
});

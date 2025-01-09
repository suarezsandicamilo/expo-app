//

// React Native

import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

// App

import { IconButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';

type Props = {
  buttons: {
    text: string;
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
      <IconButton
        name="volume-up"
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
        <IconButton
          name="volume-up"
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

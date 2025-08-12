//

import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import { ImageButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
import { ImageKey } from '../../assets/images';
import { useRef } from 'react';

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
  const anim = useRef(new Animated.Value(-500)).current;
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla
  const { play } = useAudio();
  const { speak } = useSpeech();

  return (
    <View style={styles.container}>
      <ImageButton
        source={(props.buttons[0].image ?? props.buttons[0].text) as ImageKey}
        size={Math.min(width, height) * 0.6} // Tamaño proporcional
        onPress={async () => {
          await speak(props.buttons[0].text);

          Animated.timing(anim, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
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
          size={Math.min(width, height) * 0.6} // Tamaño proporcional
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
    paddingHorizontal: '5%', // Espaciado horizontal dinámico
  },
});

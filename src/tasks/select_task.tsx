import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import { IconButton, ImageButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
import { shuffle } from '@/shared';
import { ImageKey } from '@/../assets/images';

type Option = {
  text: string;
  image: string;
  correct: boolean;
};

type Props = {
  instructions: string[];
  button: {
    text: string;
  };
  options: Option[];
  feedback: {
    correct: string;
    incorrect: string;
  };
  next: () => void;
};

export const SelectTask = (props: Props) => {
  const anim = useRef(new Animated.Value(-500)).current;
  const { play } = useAudio();
  const { speak } = useSpeech();
  const options = useRef(props.options);
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla

  useEffect(() => {
    options.current = shuffle(props.options);
  }, [props.options]);

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <IconButton
          name="volume-up"
          size={Math.min(width, height) * 0.5} // Tamaño proporcional
          onPress={async () => {
            await speak(props.button.text);
            await speak(...props.instructions);

            Animated.timing(anim, {
              toValue: 0,
              duration: 250,
              useNativeDriver: false,
            }).start();
          }}
        />
      </View>
      <Animated.View
        style={[
          styles.container_3,
          {
            transform: [{ translateX: anim }],
            gap: Math.min(width, height) * 0.01, // Espaciado dinámico
          },
        ]}
      >
        {options.current.map((option, index) => {
          return (
            <ImageButton
              key={index}
              source={option.image as ImageKey}
              size={Math.min(width, height) * 0.3} // Tamaño proporcional
              onPress={async () => {
                await speak(option.text);

                if (option.correct) {
                  await play('correct');
                  await speak(props.feedback.correct);
                  props.next();
                } else {
                  await play('incorrect');
                  await speak(props.feedback.incorrect);
                }
              }}
            />
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_1: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_3: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '75%',
  },
});
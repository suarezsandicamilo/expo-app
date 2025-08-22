//

import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import { IconButton, ImageButton } from '@/components';
import { useAudio, useEffectAsync, useSpeech } from '@/hooks';
import { shuffle } from '@/shared';
import { ImageKey } from '../../assets/images';

type Option = {
  text: string;
  image: string;
  correct: boolean;
};

type Props = {
  instructions: string[];
  button: {
    text: string[];
  };
  options: Option[];
  feedback: {
    correct: string;
    incorrect: string;
  };
  next: () => void;
};

export const SuperSelectAdvTask = (props: Props) => {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState([...Array(4)].map(() => false));
  const anim = useRef(new Animated.Value(-500)).current;
  const { play } = useAudio();
  const { speak } = useSpeech();
  const options = useRef(props.options);
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla

  useEffect(() => {
    options.current = shuffle(props.options);
  }, [props.options]);

  useEffectAsync(async () => {
    if (count === props.options.filter((o) => o.correct).length) {
      await speak(props.feedback.correct);
      props.next();
    }
  }, [count]);

  return (
    <View style={styles.container_1}>
      <View style={[styles.container_2, { paddingTop: height * 0.005 }]}>
        <IconButton
          name="volume-up"
          size={Math.min(width, height) * 0.4} // Tamaño proporcional
          onPress={async () => {
            await speak(...props.button.text);
            await speak(...props.instructions);

            Animated.timing(anim, {
              toValue: 0,
              duration: 250,
              useNativeDriver: true,
            }).start();
          }}
        />
      </View>
      <Animated.View
        style={[
          styles.container_3,
          {
            transform: [{ translateX: anim }],
            gap: Math.min(width, height) * 0.03, // Espaciado dinámico
          },
        ]}
      >
        {options.current.map((option, index) => {
          return (
            <View
              key={index}
              style={{
                opacity: array[index] ? 0.25 : 1,
                margin: width * 0.001, // Margen dinámico
              }}
            >
              <ImageButton
                source={option.image as ImageKey}
                size={Math.min(width, height) * 0.32} // Tamaño proporcional
                onPress={async () => {
                  if (array[index]) {
                    return;
                  }

                  await speak(option.text);

                  if (option.correct) {
                    await play('correct');

                    setCount((c) => c + 1);

                    setArray((s) => {
                      const next = [...s];
                      next[index] = true;
                      return next;
                    });
                  } else {
                    await play('incorrect');
                    await speak(props.feedback.incorrect);
                  }
                }}
              />
            </View>
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

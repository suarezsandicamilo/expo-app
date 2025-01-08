//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

// App

import { IconButton, ImageButton } from '@/components';
import { useAudio, useEffectAsync, useSpeech } from '@/hooks';
import { shuffle } from '@/shared';
import { ImageKey } from '../../assets/images';

type Props = {
  instructions: string[];
  button: {
    text: string[];
  };
  count: number;
  options: {
    text: string;
    image: string;
    correct: boolean;
  }[];
  feedback: {
    correct: string;
    incorrect: string;
  };
  next: () => void;
};

export const SuperSelectTask = (props: Props) => {
  const options = useRef(props.options);

  const [count, setCount] = useState(0);

  const [array, setArray] = useState([...Array(4)].map(() => false));

  const anim = useAnimatedValue(-500);

  const { play } = useAudio();

  const { speak } = useSpeech();

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
      <View style={styles.container_2}>
        <IconButton
          name="volume-up"
          size={192}
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
            transform: [
              {
                translateX: anim,
              },
            ],
          },
        ]}
      >
        {options.current.map((option, index) => {
          return (
            <View key={index} style={array[index] ? styles.opacity : {}}>
              <ImageButton
                source={option.image as ImageKey}
                size={120}
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
    gap: 24,
    justifyContent: 'center',
    width: '75%',
  },
  opacity: {
    opacity: 0.25,
  },
});

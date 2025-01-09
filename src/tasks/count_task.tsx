//

// React

import { useState } from 'react';

// React Native

import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

// App

import { ImageButton, Pop } from '@/components';
import { useEffectAsync, useSpeech } from '@/hooks';
import { ImageKey } from '../../assets/images';

type Props = {
  instructions: string[];
  button: {
    text: string;
    image?: string;
  };
  count: number;
  feedback: {
    correct: string;
  };
  next: () => void;
};

export const CountTask = (props: Props) => {
  const [count, setCount] = useState(0);

  const [array, setArray] = useState([...Array(9)].map(() => false));

  const anim = useAnimatedValue(-500);

  const { speak } = useSpeech();

  useEffectAsync(async () => {
    if (props.count === count) {
      await speak(props.feedback.correct);

      props.next();
    }
  }, [count]);

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <ImageButton
          source={(props.button.image ?? props.button.text) as ImageKey}
          size={192}
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
            transform: [
              {
                translateX: anim,
              },
            ],
          },
        ]}
      >
        {array.map((pressed, index) => {
          return (
            <Pop
              key={index}
              pressed={pressed}
              onPress={async () => {
                if (props.count === count) {
                  return;
                }

                setCount((c) => c + 1);

                setArray((b) => {
                  const next = [...b];

                  next[index] = true;

                  return next;
                });

                await speak(`${count + 1}`);
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
    gap: 24,
    justifyContent: 'center',
    width: '75%',
  },
});

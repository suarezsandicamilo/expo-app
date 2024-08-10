//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { Animated, Pressable, StyleSheet, View } from 'react-native';

// Expo

import { MaterialIcons as Icon } from '@expo/vector-icons';

// App

import { Button } from '@/components';

import { useSound, useSpeech } from '@/hooks';

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: '#BBDEFB',
    borderColor: '#2196f3',
    borderRadius: 32,
    borderWidth: 2,
    margin: 8,
    height: 64,
    width: 64,
  },
  container_1: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_2: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_3: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 64,
    width: '100%',
  },
  popped: {
    backgroundColor: '#ffffff',
    borderStyle: 'dashed',
  },
});

type Props = {
  next: () => void;
  instruction?: string;
  text?: string;
  count?: number;
  feedback?: string;
};

export const BubblesTask = (props: Props) => {
  const [count, setCount] = useState<number>(0);

  const [bubbles, setBubbles] = useState<boolean[]>(Array(6).fill(false));

  const anim = useRef(new Animated.Value(-500)).current;

  const correct = useSound('correct');

  const { speak } = useSpeech();

  useEffect(() => {
    const fn = async () => {
      const c = props.count ?? 1;

      if (c === count) {
        await correct.play();

        await speak(props.feedback);

        props.next();
      }
    };

    fn();
  }, [count]);

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <Button
          onPress={async () => {
            await speak(props.text, 'esd');

            await speak(props.instruction);

            Animated.timing(anim, {
              toValue: 0,
              duration: 250,
              useNativeDriver: false,
            }).start();
          }}
        >
          <Icon name='volume-up' color='#ffffff' size={128} />
        </Button>
      </View>
      <Animated.View
        style={[styles.container_3, { transform: [{ translateX: anim }] }]}
      >
        {bubbles.map((popped, index) => {
          return (
            <Pressable
              key={index}
              style={[styles.bubble, popped ? styles.popped : {}]}
              onPress={async () => {
                const c = props.count ?? 1;

                if (popped || c === count) {
                  return;
                }

                setCount((count) => count + 1);

                setBubbles((bubbles) => {
                  const array = [...bubbles];

                  array[index] = true;

                  return [...array];
                });

                await speak(`${count + 1}`);
              }}
            ></Pressable>
          );
        })}
      </Animated.View>
    </View>
  );
};

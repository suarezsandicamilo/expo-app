//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { Animated, Image, Pressable, StyleSheet, View } from 'react-native';

// App

import { Card, SpeechView } from '@/components';

import { useSound, useSpeech } from '@/hooks';

import { delay } from '@/_';

import { images, getImage } from '@/../assets/images';

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
  image: {
    borderRadius: 8,
    height: 256,
    width: 256,
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
  image?: keyof typeof images;
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
    const c = props.count ?? 1;

    if (c === count) {
      speak(props.feedback).then(() => {
        correct.play();

        delay(1250).then(() => {
          props.next();
        });
      });
    }
  }, [count]);

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <Card>
          <SpeechView
            speech={`${props.text} ${props.instruction}`}
            onPress={() => {
              Animated.timing(anim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false,
              }).start();
            }}
          >
            <Image style={styles.image} source={getImage(props.image)} />
          </SpeechView>
        </Card>
      </View>
      <Animated.View
        style={[styles.container_3, { transform: [{ translateX: anim }] }]}
      >
        {bubbles.map((popped, index) => {
          return (
            <Pressable
              key={index}
              style={[styles.bubble, popped ? styles.popped : {}]}
              onPress={() => {
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

                speak(`${count + 1}`).then();
              }}
            ></Pressable>
          );
        })}
      </Animated.View>
    </View>
  );
};

//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { Animated, StyleSheet, View } from 'react-native';

// Expo

import { MaterialIcons as Icon } from '@expo/vector-icons';

// App

import { Button, ImageCard } from '@/components';

import { useSound, useSpeech } from '@/hooks';

import { shuffle } from '@/_';

import { getImage, ImageSource } from '@/../assets/images';

const styles = StyleSheet.create({
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
    width: '100%',
  },
});

type Option = {
  text: string;
  image: ImageSource;
  correct: boolean;
};

type Props = {
  next: () => void;
  instruction?: string;
  text?: string;
  image?: ImageSource;
  feedback?: {
    correct: string;
    incorrect: string;
  };
  options?: Option[];
};

export const SelectTask = (props: Props) => {
  const anim = useRef(new Animated.Value(-500)).current;

  const { speak } = useSpeech();

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <Button
          onPress={async () => {
            await speak(props.text, 'esd');

            await speak(props.instruction);

            Animated.timing(anim, {
              duration: 250,
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }}
        >
          <Icon name='volume-up' color='#ffffff' size={128} />
        </Button>
      </View>
      <Animated.View
        style={[styles.container_3, { transform: [{ translateX: anim }] }]}
      >
        <InSelectTask {...props} />
      </Animated.View>
    </View>
  );
};

const InSelectTask = (props: Props) => {
  const [options, setOptions] = useState<Option[]>([]);

  const correct = useSound('correct');

  const incorrect = useSound('incorrect');

  const { speak } = useSpeech();

  useEffect(() => {
    setOptions(shuffle(props.options ?? []));
  }, []);

  return options.map((option) => {
    return (
      <ImageCard
        key={option.text}
        image={getImage(option.image)}
        size={128}
        onPress={async () => {
          await speak(option.text, 'esd');

          if (option.correct) {
            await correct.play();

            await speak(props.feedback?.correct);

            props.next();
          } else {
            await incorrect.play();

            await speak(props.feedback?.incorrect);
          }
        }}
      />
    );
  });
};

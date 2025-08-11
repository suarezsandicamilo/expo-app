//

import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import { ImageButton, IconButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
import { shuffle } from '@/shared';
import { ImageKey } from '@/../assets/images';
import { Colors } from '@/constants';

const styles = StyleSheet.create({
  container_1: {
    alignItems: 'center',
    backgroundColor: Colors['background-1'],
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_2: {
    alignItems: 'center',
    backgroundColor: Colors['background-1'],
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
  container_3: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors['background-1'],
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
});

type Option = {
  text: string;
  correct: boolean;
};

type Props = {
  next: () => void;
  instruction: string;
  instruction2: string;
  instruction3: string;
  instruction4: string;
  instruction5: string;
  staticImage: ImageKey;
  feedback: {
    correct: string;
    incorrect: string;
  };
  options: Option[];
};

export const SelectAudioTask = (props: Props) => {
  const anim = useRef(new Animated.Value(-500)).current;
  const [isAnimatingOptions, setIsAnimatingOptions] = useState(false);
  const { speak } = useSpeech();
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla

  return (
    <View style={[styles.container_1, { paddingHorizontal: width * 0.05 }]}>
      <View style={[styles.container_2, { paddingTop: height * 0.02 }]}>
        <IconButton
          name="volume-up"
          size={Math.min(width, height) * 0.45} // Tamaño proporcional
          onPress={async () => {
            await speak(props.instruction);
            await speak(props.instruction2);
            await speak(props.instruction3);
            await speak(props.instruction4);
            await speak(props.instruction5);

            Animated.timing(anim, {
              duration: 250,
              toValue: 0,
              useNativeDriver: true,
            }).start();

            setIsAnimatingOptions(true);
          }}
          style={{ marginBottom: height * 0.03 }}
        />
        <ImageButton
          source={props.staticImage as ImageKey}
          size={Math.min(width, height) * 0.4} // Tamaño proporcional
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
        <InSuperSelectAdvTask
          {...props}
          isAnimatingOptions={isAnimatingOptions}
        />
      </Animated.View>
    </View>
  );
};

const InSuperSelectAdvTask = (
  props: Props & { isAnimatingOptions: boolean },
) => {
  const [options, setOptions] = useState<Option[]>([]);
  const { play } = useAudio();
  const { speak } = useSpeech();
  const animations = useRef<Animated.Value[]>([]).current;
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla

  useEffect(() => {
    const shuffledOptions = shuffle(props.options ?? []);
    setOptions(shuffledOptions);

    animations.length = shuffledOptions.length;
    shuffledOptions.forEach((_, i) => {
      animations[i] = new Animated.Value(0); // Inicia con opacidad 0
    });

    if (props.isAnimatingOptions) {
      const animateAndSpeak = async () => {
        for (let i = 0; i < shuffledOptions.length; i++) {
          Animated.timing(animations[i], {
            toValue: 1, // Cambia opacidad a 1
            duration: 300,
            useNativeDriver: true,
          }).start();

          await speak(shuffledOptions[i].text);
          await new Promise((resolve) => setTimeout(resolve, 300));
        }
      };
      animateAndSpeak();
    }
  }, [animations, props.isAnimatingOptions, props.options]);

  const handleOptionPress = async (option: Option) => {
    await speak(option.text);

    if (option.correct) {
      await play('correct');
      await speak(props.feedback?.correct);
      props.next();
    } else {
      await play('incorrect');
      await speak(props.feedback?.incorrect);
    }
  };

  return (
    <View style={{ alignItems: 'center', width: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: height * 0.02,
        }}
      >
        {options.map((option, index) => (
          <Animated.View
            key={option.text}
            style={{
              opacity: animations[index],
              transform: [{ scale: animations[index] }],
              margin: width * 0.02,
            }}
          >
            <IconButton
              name="question-mark"
              size={Math.min(width, height) * 0.25} // Tamaño proporcional
              onPress={() => handleOptionPress(option)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

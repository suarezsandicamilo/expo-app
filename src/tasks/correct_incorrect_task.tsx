//

import { useRef, useState } from 'react';
import { Animated, StyleSheet, View, useWindowDimensions } from 'react-native';
import { ImageButton, IconButton } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
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
    paddingTop: 20,
    width: '100%',
  },
  container_3: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  staticImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

type Props = {
  next: () => void;
  instructions: string[];
  correct_answer: string;
  text: string;
  image?: ImageKey;
  feedback: {
    correct: string;
    incorrect: string;
  };
};

export const CorrectIncorrectTask = (props: Props) => {
  const anim = useRef(new Animated.Value(-500)).current;
  const { speak } = useSpeech();
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla

  return (
    <View style={[styles.container_1, { paddingHorizontal: width * 0.05 }]}>
      <View style={[styles.container_2, { paddingTop: height * 0.02 }]}>
        <IconButton
          name="volume-up"
          size={Math.min(width, height) * 0.5} // Tamaño proporcional
          onPress={async () => {
            for (const instruction of props.instructions) {
              await speak(instruction);
            }
            await speak(props.text);

            Animated.timing(anim, {
              duration: 250,
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }}
          style={{ marginBottom: height * 0.03 }} // Margen dinámico
        />
        <ImageButton
          source={props.image as ImageKey}
          size={Math.min(width, height) * 0.5} // Tamaño proporcional
          onPress={async () => {
            for (const instruction of props.instructions) {
              await speak(instruction);
            }
            await speak(props.text);
          }}
        />
      </View>

      <Animated.View
        style={[
          styles.container_3,
          { transform: [{ translateX: anim }], marginTop: height * 0.02 },
        ]}
      >
        <InRhymeSelectTask {...props} />
      </Animated.View>
    </View>
  );
};

const InRhymeSelectTask = (props: Props) => {
  const { speak } = useSpeech();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { play } = useAudio();
  const { width, height } = useWindowDimensions(); // Obtener dimensiones de la pantalla

  const handleSelection = async (option: string) => {
    setSelectedOption(option);
    await speak(option);
  };

  const validateSelection = async (option: string) => {
    const correctAnswer = props.correct_answer;
    if (option === correctAnswer) {
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
          justifyContent: 'center',
          marginBottom: height * 0.02, // Margen dinámico
        }}
      >
        <View
          style={{
            margin: width * 0.02,
            borderColor:
              selectedOption === 'Sí' ? Colors['green-3'] : 'transparent',
            borderWidth: 4,
            borderRadius: 16,
          }}
        >
          <IconButton
            name="thumb-up"
            size={Math.min(width, height) * 0.3} // Tamaño proporcional
            onPress={async () => {
              const option = 'Sí';
              await handleSelection(option);
              await validateSelection(option);
              setSelectedOption(null);
            }}
            style={(state) => ({
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: !state.pressed
                ? Colors['green-2']
                : Colors['green-3'],
            })}
          />
        </View>

        <View
          style={{
            margin: width * 0.02,
            borderColor:
              selectedOption === 'No' ? Colors['red-3'] : 'transparent',
            borderWidth: 4,
            borderRadius: 16,
          }}
        >
          <IconButton
            name="thumb-down"
            size={Math.min(width, height) * 0.3} // Tamaño proporcional
            onPress={async () => {
              const option = 'No';
              await handleSelection(option);
              await validateSelection(option);
              setSelectedOption(null);
            }}
            style={(state) => ({
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: !state.pressed
                ? Colors['red-2']
                : Colors['red-3'],
            })}
          />
        </View>
      </View>
    </View>
  );
};

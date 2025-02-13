import { useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
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

type Word = {
  text: string;
  image: ImageKey;
};

type Props = {
  next: () => void;
  instruction: string;
  instruction2: string;
  instruction3: string;
  instruction4: string;
  correct_answer: string;
  text: string;
  staticImage?: ImageKey;
  feedback: {
    correct: string;
    incorrect: string;
  };
  words?: Word[];
};

export const Correct_IncorrectTask = (props: Props) => {
  const anim = useRef(new Animated.Value(-500)).current;
  const { speak } = useSpeech();

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <IconButton
          name="volume-up"
          size={100}
          onPress={async () => {
            await speak(props.instruction);
            await speak(props.instruction2);
            await speak(props.instruction3);
            await speak(props.instruction4);
            await speak(props.text);

            Animated.timing(anim, {
              duration: 250,
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }}
          style={{ marginBottom: 30 }} // Margen entre los botones
        >
        </IconButton>
        <ImageButton 
          source={props.staticImage as ImageKey} 
          size={180}
          onPress={async () => {
            if (props.instruction2) await speak(props.instruction2);
            if (props.instruction3) await speak(props.instruction3);
            if (props.instruction4) await speak(props.instruction4);
            await speak(props.text);
          }}
        />
      </View>

      <Animated.View style={[styles.container_3, { transform: [{ translateX: anim }] }]}>
        <InRhymeSelectTask {...props} />
      </Animated.View>
    </View>
  );
};

const InRhymeSelectTask = (props: Props) => {
    const { speak } = useSpeech();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const { play } = useAudio();
  
    const handleSelection = async (option: string) => {
      setSelectedOption(option); // Establecer la opción seleccionada
      await speak(option); // Reproducir la selección
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
        {/* Contenedor horizontal de las opciones */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
          
          {/* Contenedor para el botón "Sí" */}
          <View
            style={{
              margin: 10,
              borderColor: selectedOption === 'Sí' ? Colors['green-3'] : 'transparent', // Borde verde si está seleccionado
              borderWidth: 2, // Borde de 3px si está seleccionado
              borderRadius: 8, // Bordes redondeados para el borde externo
            }}
          >
            <IconButton
              name="thumb-up"
              size={100}
              onPress={async () => {
                const option = 'Sí';
                await handleSelection(option);
                await validateSelection(option);
              }}
              style={(state) => ({
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: !state.pressed ? Colors['green-2'] : Colors['green-3'], // Fondo verde para "Sí"
              })}
            >
            </IconButton>
          </View>
  
          {/* Contenedor para el botón "No" */}
          <View
            style={{
              margin: 10,
              borderColor: selectedOption === 'No' ? Colors['red-3'] : 'transparent', // Borde rojo si está seleccionado
              borderWidth: 2, // Borde de 3px si está seleccionado
              borderRadius: 8, // Bordes redondeados para el borde externo
            }}
          >
            <IconButton
              name="thumb-down"
              size={100}
              onPress={async () => {
                const option = 'No';
                await handleSelection(option);
                await validateSelection(option);
              }}
              style={(state) => ({
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: !state.pressed ? Colors['red-2'] : Colors['red-3'], // Fondo rojo para "No"
              })}
            >
            </IconButton>
          </View>
        </View>
      </View>
    );
  };

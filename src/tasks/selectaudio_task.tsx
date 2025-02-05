import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { ImageButton, IconButton  } from '@/components';
import { useAudio, useSpeech } from '@/hooks';
import { shuffle } from '@/shared';
import { ImageKey  } from '@/../assets/images';

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
    backgroundColor: Colors['background-1'],
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
  staticImage: ImageKey ;
  feedback: {
    correct: string;
    incorrect: string;
  };
  options: Option[];
};

export const SelectAudioTask = (props: Props) => {
    const anim = useRef(new Animated.Value(-500)).current;
    const [isAnimatingOptions, setIsAnimatingOptions] = useState(false); // Controla la animación de opciones
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
              await speak(props.instruction5);
  
              Animated.timing(anim, {
                duration: 250,
                toValue: 0,
                useNativeDriver: true,
              }).start();
  
              // Inicia animación de opciones después de los speaks iniciales
              setIsAnimatingOptions(true);
            }}
            style={{ marginBottom: 40 }}
          >
          </IconButton>
          <ImageButton 
            source={props.staticImage as ImageKey} 
            size={180} />
        </View>
        <Animated.View style={[styles.container_3, { transform: [{ translateX: anim }] }]}>
          <InSuperSelectAdvTask {...props} isAnimatingOptions={isAnimatingOptions} />
        </Animated.View>
      </View>
    );
  };
  
  const InSuperSelectAdvTask = (props: Props & { isAnimatingOptions: boolean }) => {
    const [options, setOptions] = useState<Option[]>([]);
    const { play } = useAudio();
    const { speak } = useSpeech();
    const animations = useRef<Animated.Value[]>([]).current;

    useEffect(() => {
        const shuffledOptions = shuffle(props.options ?? []);
        setOptions(shuffledOptions);

        // Inicializar animaciones
        animations.length = shuffledOptions.length;
        shuffledOptions.forEach((_, i) => {
            animations[i] = new Animated.Value(0); // Inicia con opacidad 0
        });

        // Animar opciones si está habilitado
        if (props.isAnimatingOptions) {
            const animateAndSpeak = async () => {
                for (let i = 0; i < shuffledOptions.length; i++) {
                    Animated.timing(animations[i], {
                        toValue: 1, // Cambia opacidad a 1
                        duration: 300,
                        useNativeDriver: true,
                    }).start();

                    await speak(shuffledOptions[i].text); // Pronunciar texto
                    await new Promise((resolve) => setTimeout(resolve, 300)); // Retraso entre botones
                }
            };
            animateAndSpeak();
        }
    }, [props.isAnimatingOptions]);

    const handleOptionPress = async (option: Option) => {
        await speak(option.text); // Pronunciar texto al tocar la opción

        if (option.correct) {
            await play('correct'); // Reproducir audio correcto
            await speak(props.feedback?.correct);
            props.next(); // Pasar a la siguiente tarea
        } else {
            await play('incorrect'); // Reproducir audio incorrecto
            await speak(props.feedback?.incorrect);
        }
    };

    return (
        <View style={{ alignItems: 'center', width: '100%' }}>
            {/* Contenedor horizontal de las opciones */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
                {options.map((option, index) => (
                    <Animated.View
                        key={option.text}
                        style={{
                            opacity: animations[index], // Controla la opacidad
                            transform: [{ scale: animations[index] }], // Escalado adicional para mejor efecto
                            margin: 10, // Espaciado entre botones
                        }}
                    >
                        <IconButton
                            name="question-mark"
                            size={100}
                            onPress={() => handleOptionPress(option)} // Validar inmediatamente al tocar
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                        </IconButton>
                    </Animated.View>
                ))}
            </View>
        </View>
    );
};

  
  

import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Button, ImageCard, ConfirmationButton } from '@/components';
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
    justifyContent: 'flex-start',
    paddingTop: 20,
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
  instruction?: string;
  instruction2?: string;
  instruction3?: string;
  instruction4?: string;
  instruction5?: string;
  staticImage?: ImageSource;
  feedback?: {
    correct: string;
    incorrect: string;
  };
  options?: Option[];
};

export const SelectAudioTask = (props: Props) => {
    const anim = useRef(new Animated.Value(-500)).current;
    const [isAnimatingOptions, setIsAnimatingOptions] = useState(false); // Controla la animación de opciones
    const { speak } = useSpeech();
  
    return (
      <View style={styles.container_1}>
        <View style={styles.container_2}>
          <Button
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
            <Icon name="volume-up" color="#ffffff" size={70} />
          </Button>
          <ImageCard image={getImage(props.staticImage)} size={150} />
        </View>
        <Animated.View style={[styles.container_3, { transform: [{ translateX: anim }] }]}>
          <InSuperSelectAdvTask {...props} isAnimatingOptions={isAnimatingOptions} />
        </Animated.View>
      </View>
    );
  };
  
const InSuperSelectAdvTask = (props: Props & { isAnimatingOptions: boolean }) => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
    const correct = useSound('correct');
    const incorrect = useSound('incorrect');
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

        // Si está habilitado animar las opciones
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

    const toggleOptionSelection = (option: Option) => {
        setSelectedOptions((prevSelected) => {
        const newSelected = new Set(prevSelected);
        if (newSelected.has(option.text)) {
            newSelected.delete(option.text);
        } else {
            newSelected.add(option.text);
        }
        return newSelected;
        });
    };

    const validateSelection = async () => {
        const correctSelections = options.filter((option) => option.correct).map((opt) => opt.text);
        const selectedArray = Array.from(selectedOptions);

        const allCorrectSelected = correctSelections.every((text) => selectedArray.includes(text));
        const noIncorrectSelected = selectedArray.every((text) => correctSelections.includes(text));

        if (allCorrectSelected && noIncorrectSelected) {
        await correct.play();
        await speak(props.feedback?.correct);
        props.next();
        } else {
        await incorrect.play();
        await speak(props.feedback?.incorrect);
        }
    };

    return (
        <View style={{ alignItems: 'center', width: '100%' }}>
        {/* Contenedor horizontal de las opciones */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 20 }}>
            {options.map((option, index) => {
            const isSelected = selectedOptions.has(option.text);

            return (
                <Animated.View
                key={option.text}
                style={{
                    opacity: animations[index], // Controla la opacidad
                    transform: [{ scale: animations[index] }], // Escalado adicional para mejor efecto
                    margin: 10, // Espaciado entre botones
                }}
                >
                <Button
                    size={100}
                    onPress={async () => {
                    toggleOptionSelection(option);
                    await speak(option.text);
                    }}
                    style={{
                    borderWidth: 2,
                    borderColor: isSelected ? 'green' : 'transparent',
                    backgroundColor: '#f0f0f0',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}
                >
                    <Icon name="volume-up" color="#000000" size={40} />
                </Button>
                </Animated.View>
            );
            })}
        </View>

        {/* Botón de confirmación */}
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <ConfirmationButton onPress={validateSelection} />
        </View>
        </View>
    );
};
  
  

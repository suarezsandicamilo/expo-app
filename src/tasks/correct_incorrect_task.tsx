import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Button, ImageCard, ConfirmationButton } from '@/components';
import { useSound, useSpeech } from '@/hooks';
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

type Word = {
  text: string;
  image: ImageSource;
};

type Props = {
  next: () => void;
  instruction?: string;
  instruction2?: string;
  instruction3?: string;
  instruction4?: string;
  text?: string;
  staticImage?: ImageSource;
  feedback?: {
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
        <Button
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
          style={{ marginBottom: 30 }}
        >
          <Icon name="volume-up" color="#ffffff" size={70} />
        </Button>
        <ImageCard 
            image={getImage(props.staticImage)} 
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
    const correct = useSound('correct');
    const incorrect = useSound('incorrect');
  
    const handleSelection = (option: string) => {
      setSelectedOption(option); // Establecer la opción seleccionada
      speak(option); // Reproducir la selección
    };
  
    const validateSelection = async () => {
      const correctAnswer = 'Sí';
      if (selectedOption === correctAnswer) {
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
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
          
          {/* Contenedor para el botón "Sí" */}
          <View
            style={{
              margin: 10,
              borderColor: selectedOption === 'Sí' ? 'green' : 'transparent', // Borde verde si está seleccionado
              borderWidth: selectedOption === 'Sí' ? 3 : 0, // Borde de 3px si está seleccionado
              borderRadius: 8, // Bordes redondeados para el borde externo
            }}
          >
            <Button
              size={100}
              onPress={() => handleSelection('Sí')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#4CAF50', // Fondo verde para "Sí"
              }}
            >
              <Icon name="check" color="#ffffff" size={50} />
            </Button>
          </View>
  
          {/* Contenedor para el botón "No" */}
          <View
            style={{
              margin: 10,
              borderColor: selectedOption === 'No' ? 'red' : 'transparent', // Borde rojo si está seleccionado
              borderWidth: selectedOption === 'No' ? 3 : 0, // Borde de 3px si está seleccionado
              borderRadius: 8, // Bordes redondeados para el borde externo
            }}
          >
            <Button
              size={100}
              onPress={() => handleSelection('No')}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F44336', // Fondo rojo para "No"
              }}
            >
              <Icon name="close" color="#ffffff" size={50} />
            </Button>
          </View>
        </View>
  
        {/* Botón de confirmación */}
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
          <ConfirmationButton onPress={validateSelection} />
        </View>
      </View>
    );
  };
  
  
  
  

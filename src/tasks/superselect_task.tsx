import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View, Text } from 'react-native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { Button, ImageCard, ConfirmationButton } from '@/components';
import { useSound, useSpeech } from '@/hooks';
import { shuffle } from '@/_';
import { getImage, ImageSource } from '@/../assets/images';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  largeCardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  largeCard: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'transparent',
  },
  smallCardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  instruction: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 30,
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
  instruction2?: string;
  instruction3?: string;
  staticImage?: ImageSource;
  staticImage2?: ImageSource;
  feedback?: {
    correct: string;
    incorrect: string;
  };
  options?: Option[];
};

export const SuperSelectTask = (props: Props) => {
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const { speak } = useSpeech();
  const correct = useSound('correct');
  const incorrect = useSound('incorrect');
  const anim = useRef(new Animated.Value(-500)).current;

  const playTaskAudio = async () => {
    setHighlightedCard(0);
    await speak(props.instruction);
    setHighlightedCard(1);
    await speak(props.instruction2);
    setHighlightedCard(null);
    await speak(props.instruction3);
    Animated.timing(anim, {
      duration: 250,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

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
    const correctSelections = props.options?.filter((option) => option.correct).map((opt) => opt.text) || [];
    const selectedArray = Array.from(selectedOptions);

    const allCorrectSelected = correctSelections.every((text) => selectedArray.includes(text));
    const noIncorrectSelected = selectedArray.every((text) => correctSelections.includes(text));

    if (allCorrectSelected && noIncorrectSelected) {
      if (correct?.play) await correct.play();
      await speak(props.feedback?.correct || '');
      props.next();
    } else {
      if (incorrect?.play) await incorrect.play();
      await speak(props.feedback?.incorrect || '');
    }
  };

  const handleImagePress = async (index: number) => {
    if (index === 0) {
      // Instrucción para la primera imagen (staticImage)
      await speak(props.instruction);  // Aquí puedes cambiar por cualquier acción que desees
    } else if (index === 1) {
      // Instrucción para la segunda imagen (staticImage2)
      await speak(props.instruction2);  // Aquí puedes cambiar por cualquier acción que desees
    }
  };  

  return (
    <View style={styles.container}>

      <Button size={100} onPress={playTaskAudio} style={{ marginBottom: 40 }}>
        <Icon name="volume-up" color="#ffffff" size={70} />
      </Button>

      <View style={styles.largeCardContainer}>
        {[props.staticImage, props.staticImage2].map((image, index) => (
          image && (
            <View
              key={index}
              style={[
                styles.largeCard,
                highlightedCard === index && { borderColor: 'yellow' },
              ]}
            >
              <ImageCard image={getImage(image)} size={160} 
              onPress={() => handleImagePress(index)} // Manejador de evento
              />
            </View>
          )
        ))}
      </View>

      <Animated.View style={[styles.smallCardsContainer, { transform: [{ translateX: anim }] }]}>
        {props.options?.map((option) => {
          const isSelected = selectedOptions.has(option.text);

          return (
            <View
              key={option.text}
              style={{
                borderColor: isSelected ? 'green' : 'transparent', // Always green for selected options
                borderWidth: isSelected ? 2 : 0,
                borderRadius: 8,
                margin: 5,
              }}
            >
              <ImageCard
                image={getImage(option.image)}
                size={128}
                onPress={async () => {
                  toggleOptionSelection(option);
                  await speak(option.text);
                }}
              />
            </View>
          );
        })}
      </Animated.View>

      <View style={styles.buttonContainer}>
        <ConfirmationButton onPress={validateSelection} />
      </View>
    </View>
  );
};

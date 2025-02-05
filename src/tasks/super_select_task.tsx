import { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Button, IconButton, ImageButton} from '@/components';
import { useAudio, useEffectAsync, useSpeech } from '@/hooks';
import { shuffle } from '@/shared';
import { ImageKey } from '../../assets/images';

import { Colors } from '@/constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors['background-1'],
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  largeCardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
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
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
});

type Option = {
  text: string;
  image: ImageKey;
  correct: boolean;
};

type Props = {
  next: () => void;
  instruction: string;
  instruction2: string;
  instruction3: string;
  staticImage: ImageKey;
  staticImage2: ImageKey;
  feedback: {
    correct: string;
    incorrect: string;
  };
  options: Option[];
};

export const SuperSelectTask = (props: Props) => {
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const { speak } = useSpeech();
  const { play } = useAudio();
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
      await play('correct');
      await speak(props.feedback?.correct || '');
      props.next();
    } else {
      await play('incorrect');
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

      <IconButton
          name="volume-up"
          size={78}
          onPress={async () => {
            playTaskAudio()
          }}
          style={{
            marginBottom: 10 
          }}
        >
      </IconButton>

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
              <ImageButton source={image as ImageKey} size={160} 
              onPress={() => handleImagePress(index)} // Manejador de evento
              />
            </View>
          )
        ))}
      </View>

      <Animated.View style={[styles.smallCardsContainer, { transform: [{ translateX: anim }] }, {
        alignContent: 'center',
        flexWrap: 'wrap',
        width: '75%',
      }]}>
        {props.options?.map((option) => {
          const isSelected = selectedOptions.has(option.text);

          return (
            <View
              key={option.text}
              style={{
                borderColor: isSelected ? 'green' : 'transparent', // Always green for selected options
                borderWidth: 2,
                borderRadius: 8,
                margin: 5,
              }}
            >
              <ImageButton
                source={option.image as ImageKey}
                size={96}
                onPress={async () => {
                  toggleOptionSelection(option);

                  if (!isSelected) {
                    await speak(option.text);
                  }
                }}
              />
            </View>
          );
        })}
      </Animated.View>
        <Animated.View style={[styles.buttonContainer, { transform: [{ translateX: anim }] }]}>
          <IconButton
            name="check"
            onPress={validateSelection}
            size={78}
          />
        </Animated.View>
    </View>
  );
};
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
image: ImageSource;
correct: boolean;
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
options?: Option[];
};

export const SuperSelectAdvTask = (props: Props) => {
  const anim = useRef(new Animated.Value(-500)).current;

  const { speak } = useSpeech();

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <Button
        size={100}
          onPress={async () => {
            await speak(props.instruction);           
            await speak(props.text);  
            await speak(props.instruction2);
            await speak(props.instruction3);
            await speak(props.instruction4);

            Animated.timing(anim, {
              duration: 250,
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }}
          style={{ marginBottom: 40 }}
        >
          <Icon name='volume-up' color='#ffffff' size={70} />
        </Button>
        <ImageCard
          image={getImage(props.staticImage)}
          size={150}
        />
      </View>
      <Animated.View
        style={[styles.container_3, { transform: [{ translateX: anim }] }]}
      >
        <InSuperSelectAdvTask {...props} />
      </Animated.View>
    </View>
  );
};

const InSuperSelectAdvTask = (props: Props) => {
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
            await speak(option.text);
  
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

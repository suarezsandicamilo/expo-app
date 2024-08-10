//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { Animated, Image, StyleSheet, View } from 'react-native';

// App

import { Card, DragView } from '@/components';

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
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_4: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
  drop: {
    borderStyle: 'dashed',
    borderWidth: 2,
    elevation: 0,
  },
  hover: {
    borderColor: '#8bc34a',
    borderWidth: 4,
  },
  image: {
    borderRadius: 8,
    height: 128,
    width: 128,
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
    correct?: string;
    incorrect?: string;
  };
  options?: Option[];
};

export const DragAndDropTask = (props: Props) => {
  const [hover, setHover] = useState(false);

  const anim = useRef(new Animated.Value(-500)).current;

  const { speak } = useSpeech();

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <Card
          size={128}
          onPress={async () => {
            await speak(props.text);

            await speak(props.instruction);

            Animated.timing(anim, {
              duration: 250,
              toValue: 0,
              useNativeDriver: true,
            }).start();
          }}
        >
          <Image style={styles.image} source={getImage(props.image)} />
        </Card>
      </View>
      <View style={styles.container_3}>
        <Card
          size={128}
          style={[styles.drop, hover ? styles.hover : {}]}
        ></Card>
      </View>
      <Animated.View
        style={[styles.container_4, { transform: [{ translateX: anim }] }]}
      >
        <InDragAndDropTask {...props} setHover={setHover} />
      </Animated.View>
    </View>
  );
};

type InProps = Props & {
  setHover: (hover: boolean) => void;
};

const InDragAndDropTask = (props: InProps) => {
  const [options, setOptions] = useState<Option[]>([]);

  const correct = useSound('correct');

  const incorrect = useSound('incorrect');

  const { speak } = useSpeech();

  useEffect(() => {
    setOptions(shuffle(props.options ?? []));
  }, []);

  return options.map((option) => {
    return (
      <Card
        key={option.text}
        size={128}
        onPress={async () => {
          await speak(option.text);
        }}
      >
        <DragView
          onHoverStart={() => {
            props.setHover(true);
          }}
          onHoverEnd={() => {
            props.setHover(false);
          }}
          onDrop={async () => {
            props.setHover(false);

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
        >
          <Image style={styles.image} source={getImage(option.image)} />
        </DragView>
      </Card>
    );
  });
};

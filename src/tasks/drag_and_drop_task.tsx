//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { Animated, Image, StyleSheet, View } from 'react-native';

// App

import { Card, DragView, SpeechView } from '@/components';

import { useSound } from '@/hooks';

import { delay, shuffle } from '@/_';

import { getImage, images } from '@/../assets/images';

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
  image: keyof typeof images;
  correct: boolean;
};

type Props = {
  next: () => void;
  instruction?: string;
  text?: string;
  image?: keyof typeof images;
  options?: Option[];
};

export const DragAndDropTask = (props: Props) => {
  const [hover, setHover] = useState(false);

  const anim = useRef(new Animated.Value(-500)).current;

  return (
    <View style={styles.container_1}>
      <View style={styles.container_2}>
        <Card size={128}>
          <SpeechView
            speech={`${props.text} ${props.instruction}`}
            onPress={() => {
              Animated.timing(anim, {
                duration: 250,
                toValue: 0,
                useNativeDriver: true,
              }).start();
            }}
          >
            <Image style={styles.image} source={getImage(props.image)} />
          </SpeechView>
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

  useEffect(() => {
    setOptions(shuffle(props.options ?? []));
  }, []);

  return options.map((option) => {
    return (
      <Card key={option.text} size={128}>
        <SpeechView speech={option.text}>
          <DragView
            onHoverStart={() => {
              props.setHover(true);
            }}
            onHoverEnd={() => {
              props.setHover(false);
            }}
            onDrop={() => {
              if (option.correct) {
                correct.play();

                delay(1250).then(() => {
                  props.next();
                });
              } else {
                incorrect.play();
              }

              props.setHover(false);
            }}
          >
            <Image style={styles.image} source={getImage(option.image)} />
          </DragView>
        </SpeechView>
      </Card>
    );
  });
};

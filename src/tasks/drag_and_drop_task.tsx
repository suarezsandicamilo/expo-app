//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import {
  Animated,
  Dimensions,
  StyleSheet,
  useAnimatedValue,
  View,
} from 'react-native';

// React Native Gesture Handler

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

// App

import { IconButton, ImageButton } from '@/components';
import { Colors } from '@/constants';
import { useAudio, useLock, useSpeech } from '@/hooks';
import { shuffle } from '@/shared';
import { ImageKey } from '@/../assets/images';

type Layout = {
  x: number;
  y: number;
  w: number;
  h: number;
};

const intersects = (layout_1: Layout, layout_2: Layout) => {
  const x_1 = layout_1.x <= layout_2.x + layout_2.w;
  const x_2 = layout_1.x + layout_1.w >= layout_2.x;

  const y_1 = layout_1.y <= layout_2.y + layout_2.h;
  const y_2 = layout_1.y + layout_1.h >= layout_2.y;

  return x_1 && x_2 && y_1 && y_2;
};

type Option = {
  text: string;
  image: string;
  correct: boolean;
};

type Props = {
  instructions: string[];
  button: {
    text: string;
  };
  options: Option[];
  feedback: {
    correct: string;
    incorrect: string;
  };
  next: () => void;
};

export const DragAndDropTask = (props: Props) => {
  const [hover, setHover] = useState(false);

  const anim = useAnimatedValue(-500);

  const { play } = useAudio();

  const { speak } = useSpeech();

  const options = useRef(props.options);

  useEffect(() => {
    options.current = shuffle(props.options);
  }, [props.options]);

  return (
    <GestureHandlerRootView
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <View style={styles.container_1}>
        <View style={styles.container_2}>
          <IconButton
            name="volume-up"
            size={120}
            onPress={async () => {
              await speak(props.button.text);

              await speak(...props.instructions);

              Animated.timing(anim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false,
              }).start();
            }}
          />
          <View style={[styles.drop, hover && styles.hover]} />
        </View>
        <Animated.View
          style={[
            styles.container_3,
            {
              transform: [
                {
                  translateX: anim,
                },
              ],
            },
          ]}
        >
          {options.current.map((option, index) => {
            return (
              <Drag
                key={index}
                option={option}
                onDrop={async () => {
                  setHover(false);

                  await speak(option.text);

                  if (option.correct) {
                    await play('correct');

                    await speak(props.feedback.correct);

                    props.next();
                  } else {
                    await play('incorrect');

                    await speak(props.feedback.incorrect);
                  }
                }}
                onHoverIn={() => {
                  setHover(true);
                }}
                onHoverOut={() => {
                  setHover(false);
                }}
              />
            );
          })}
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

type DragProps = {
  option: Option;
  onDrop: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
};

const Drag = (props: DragProps) => {
  const anim = useRef(new Animated.ValueXY()).current;

  const { isLocked } = useLock();

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      const layout_1 = {
        x: Dimensions.get('screen').width / 2 - 80,
        y: Dimensions.get('screen').height / 2 - 160,
        w: 160,
        h: 160,
      };

      const layout_2 = {
        x: event.absoluteX - 60,
        y: event.absoluteY - 60,
        w: 120,
        h: 120,
      };

      if (intersects(layout_1, layout_2)) {
        props.onHoverIn();
      } else {
        props.onHoverOut();
      }

      anim.setValue({
        x: event.translationX,
        y: event.translationY,
      });
    })
    .onEnd((event) => {
      const layout_1 = {
        x: Dimensions.get('screen').width / 2 - 80,
        y: Dimensions.get('screen').height / 2 - 160,
        w: 160,
        h: 160,
      };

      const layout_2 = {
        x: event.absoluteX - 30,
        y: event.absoluteY - 30,
        w: 60,
        h: 60,
      };

      if (intersects(layout_1, layout_2)) {
        props.onDrop();
      }

      Animated.spring(anim, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: false,
      }).start();
    });

  return (
    <GestureDetector gesture={!isLocked ? gesture : Gesture.Tap()}>
      <Animated.View
        style={{
          transform: anim.getTranslateTransform(),
        }}
      >
        <ImageButton source={props.option.image as ImageKey} size={120} />
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container_1: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
    width: '100%',
  },
  container_3: {
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
    width: '75%',
  },
  drop: {
    borderColor: Colors['theme-3'],
    borderRadius: 12,
    borderStyle: 'dotted',
    borderWidth: 2,
    height: 120,
    width: 120,
  },
  hover: {
    borderColor: Colors['theme-3'],
    borderWidth: 4,
  },
});

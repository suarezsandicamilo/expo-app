//

// React

import { useRef } from 'react';

// React Native

import { Animated } from 'react-native';

// React Native Gesture Handler

import { Gesture, GestureDetector } from 'react-native-gesture-handler';

// App

const sensitivity = -100;

type Props = React.PropsWithChildren<{
  onDrop?: () => void;
  onHoverEnd?: () => void;
  onHoverStart?: () => void;
}>;

export const DragView = (props: Props) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY < sensitivity) {
        if (props.onHoverStart) {
          props.onHoverStart();
        }
      } else {
        if (props.onHoverEnd) {
          props.onHoverEnd();
        }
      }

      Animated.spring(pan, {
        toValue: {
          x: event.translationX,
          y: event.translationY,
        },
        useNativeDriver: false,
      }).start();
    })
    .onEnd((event) => {
      if (props.onDrop && event.translationY < sensitivity) {
        props.onDrop();
      }

      Animated.spring(pan, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: false,
      }).start();
    });

  return (
    <Animated.View
      style={{
        transform: pan.getTranslateTransform(),
      }}
    >
      <GestureDetector gesture={gesture}>{props.children}</GestureDetector>
    </Animated.View>
  );
};

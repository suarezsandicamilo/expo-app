//

// React

import { useEffect, useState } from 'react';

// React Native

import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';

// App

import { Colors } from '@/constants';
import { mod } from '@/shared';
import { Icon } from './icon';
import { LockPressable } from './lock_pressable';

type Props = {
  force: boolean;
  progress: number;
  index: number;
  onPress?: () => void;
};

export const PathButton = (props: Props) => {
  if (props.force) {
    return <ProgressPathButton {...props} />;
  }

  if (props.progress < props.index) {
    return <BackPathButton />;
  }

  if (props.progress === props.index) {
    return <ProgressPathButton {...props} />;
  }

  return <DonePathButton />;
};

const BackPathButton = () => {
  return (
    <View
      style={[
        {
          backgroundColor: '#9e9e9e',
        },
        styles.container_1,
      ]}
    >
      <View
        style={[
          {
            backgroundColor: '#9e9e9e',
            borderColor: Colors['text-2'],
          },
          styles.container_2,
        ]}
      >
        <Icon name="star" size={48} />
      </View>
    </View>
  );
};

const ProgressPathButton = (props: Props) => {
  const [pressed, setPressed] = useState(false);

  const anim = useAnimatedValue(1);

  const theme_1 = mod(
    [
      Colors['theme-1'],
      Colors['theme-2'],
      Colors['theme-3'],
      Colors['theme-4'],
    ],
    props.index,
  );

  const theme_2 = mod(
    [
      Colors['theme-1-dark'],
      Colors['theme-2-dark'],
      Colors['theme-3-dark'],
      Colors['theme-4-dark'],
    ],
    props.index,
  );

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [anim]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            scale: anim,
          },
        ],
      }}
    >
      <View
        style={[
          {
            backgroundColor: !pressed ? theme_1 : theme_2,
          },
          styles.container_1,
        ]}
      >
        <LockPressable
          onPress={props.onPress}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          style={[
            {
              backgroundColor: !pressed ? theme_1 : theme_2,
              borderColor: Colors['text-2'],
            },
            styles.container_2,
          ]}
        >
          <Icon name="star" size={48} />
        </LockPressable>
      </View>
    </Animated.View>
  );
};

const DonePathButton = () => {
  return (
    <View
      style={[
        {
          backgroundColor: Colors['star-1'],
        },
        styles.container_1,
      ]}
    >
      <View
        style={[
          {
            backgroundColor: Colors['star-1'],
            borderColor: Colors['text-2'],
          },
          styles.container_2,
        ]}
      >
        <Icon name="star" size={48} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_1: {
    alignItems: 'center',
    borderRadius: 48,
    height: 96,
    justifyContent: 'center',
    margin: 24,
    width: 96,
  },
  container_2: {
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 8,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
});

//

// React

import React, { useState } from 'react';

// React Native

import { Animated, StyleSheet, useAnimatedValue, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { IconButton, Progress } from '@/components';
import { Colors } from '@/constants';
import { LockProvider } from '@/contexts';
import { useEffectAsync, useSpeech } from '@/hooks';
import { delay, RootStackParamList } from '@/shared';
import { TaskScreen } from './task_screen';

type Props = NativeStackScreenProps<RootStackParamList, 'lesson'>;

export const LessonScreen = (props: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <LockProvider>
      <View
        style={[
          styles.container_1,
          {
            paddingTop: insets.top * 1.5,
          },
        ]}
      >
        <InLessonScreen {...props} />
      </View>
    </LockProvider>
  );
};

const InLessonScreen = (props: Props) => {
  const [progress, setProgress] = useState(0);

  const anim = useAnimatedValue(0);

  const { speak } = useSpeech();

  const { lesson } = props.route.params;

  const task = lesson.tasks[progress];

  useEffectAsync(async () => {
    await speak(...task.instructions);
  }, [progress]);

  const next = async () => {
    if (progress + 1 === lesson.tasks.length) {
      props.navigation.navigate('end');

      return;
    }

    Animated.timing(anim, {
      toValue: -500,
      duration: 500,
      useNativeDriver: false,
    }).start();

    await delay(500);

    setProgress(progress + 1);

    Animated.timing(anim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <>
      <View style={styles.container_2}>
        <IconButton
          name="arrow-back"
          onPress={() => {
            props.navigation.navigate('home');
          }}
        />
        <View
          style={{
            width: '50%',
          }}
        >
          <Progress progress={progress} count={lesson.tasks.length} />
        </View>
        <IconButton
          name="question-mark"
          onPress={async () => {
            await speak(...task.instructions);
          }}
        />
      </View>
      <Animated.View
        style={[
          styles.container_3,
          {
            transform: [{ translateX: anim }],
          },
        ]}
      >
        <TaskScreen task={task} next={next} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container_1: {
    alignItems: 'center',
    backgroundColor: Colors['background-1'],
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  container_3: {
    alignItems: 'center',
    flex: 11,
    justifyContent: 'center',
    width: '100%',
  },
});

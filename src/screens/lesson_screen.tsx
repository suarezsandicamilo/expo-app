//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { Animated, StyleSheet, View } from 'react-native';

// Expo

import { StatusBar } from 'expo-status-bar';

import { MaterialIcons as Icon } from '@expo/vector-icons';

// React Navigation

import { useNavigation, useRoute } from '@react-navigation/native';

// React Native Gesture Handler

import { GestureHandlerRootView } from 'react-native-gesture-handler';

// React Native Safe Area Context

import { useSafeAreaInsets } from 'react-native-safe-area-context';

// App

import { Task } from '@/types';

import { Progress } from '@/components';

import { LockProvider, useSpeech } from '@/hooks';

import { TaskFactory } from '@/tasks';

import { delay } from '@/_';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#8bc34a',
    borderRadius: 48,
    elevation: 2,
    height: 40,
    justifyContent: 'center',
    margin: 8,
    padding: 8,
    width: 40,
  },
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
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  container_3: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 11,
    justifyContent: 'center',
    width: '100%',
  },
});

export const LessonScreen = () => {
  return (
    <LockProvider>
      <InLessonScreen />
    </LockProvider>
  );
};

const InLessonScreen = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const [progress, setProgress] = useState(0);

  const { speak } = useSpeech();

  const tasks = route.params.lesson.tasks as Task[];
  const task = tasks[progress];

  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fn = async () => {
      await speak(task.instruction);
    };

    fn();
  }, [task]);

  const next = async () => {
    const p = progress + 1;

    if (p !== tasks.length) {
      Animated.timing(anim, {
        toValue: -500,
        duration: 500,
        useNativeDriver: true,
      }).start();

      await delay(500);

      setProgress(p);

      Animated.timing(anim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      const lessonIndex = route.params.lessonIndex;

      navigation.navigate('Victory', {
        lessonIndex,
      });
    }
  };

  return (
    <GestureHandlerRootView>
      <View
        style={[
          styles.container_1,
          {
            paddingTop: insets.top,
          },
        ]}
      >
        <StatusBar style='auto' />
        <View style={styles.container_2}>
          <Progress value={progress / tasks.length} />
          <View style={styles.button}>
            <Icon
              name='question-mark'
              color='#ffffff'
              size={20}
              onPress={() => {
                speak(task.instruction);
              }}
            />
          </View>
        </View>
        <Animated.View
          style={[styles.container_3, { transform: [{ translateX: anim }] }]}
        >
          {TaskFactory.create(task, next)}
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

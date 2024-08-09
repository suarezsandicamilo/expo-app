//

// React

import { useState } from 'react';

// React Native

import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

// Expo

import { MaterialIcons as Icon } from '@expo/vector-icons';

// React Navigation

import { useFocusEffect, useNavigation } from '@react-navigation/native';

// App

import { Lesson } from '@/types';

import { Db } from '@/db';

import { Lessons } from '@/../data';

const styles = StyleSheet.create({
  active: {
    backgroundColor: '#8bc34a',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#9e9e9e',
    borderRadius: 48,
    elevation: 2,
    height: 96,
    justifyContent: 'center',
    margin: 8,
    padding: 8,
    width: 96,
  },
  container_1: {
    flex: 1,
    width: '100%',
  },
  container_2: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  pressed: {
    backgroundColor: '#689f38',
  },
});

const sine = (step: number) => {
  const a = 100;
  const s = 8;
  const f = (2 * Math.PI * 1) / s;

  return a * Math.sin(f * step);
};

export const Path = () => {
  const [progress, setProgress] = useState(0);

  const navigation = useNavigation<any>();

  const lessons = Lessons as Lesson[];

  useFocusEffect(() => {
    const fn = async () => {
      const progress = await Db.get('progress', 1);

      setProgress(progress);
    };

    fn();
  });

  return (
    <ScrollView style={styles.container_1}>
      <View style={styles.container_2}>
        {lessons.map((lesson, index) => {
          const active = progress > index;

          return (
            <Pressable
              key={lesson.id}
              style={(state) => {
                return [
                  styles.button,
                  active ? styles.active : {},
                  active && state.pressed ? styles.pressed : {},
                  {
                    left: sine(index),
                  },
                ];
              }}
              onPress={() => {
                if (active) {
                  navigation.navigate('Lesson', {
                    lesson,
                    lessonIndex: index + 1,
                  });
                }
              }}
            >
              <Icon name='star' color='#ffffff' size={32} />
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
};

//

// React

import { useEffect, useRef, useState } from 'react';

// React Native

import { ScrollView, StyleSheet, View } from 'react-native';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { Lessons } from '@/data';
import { Db } from '@/db';
import { useEffectAsync } from '@/hooks';
import { RootStackParamList } from '@/shared';
import { Progress } from '@/types';
import { PathButton } from './path_button';

const sin = (step: number) => {
  const a = 96;
  const s = 8;
  const f = (Math.PI * 2) / s;

  return a * Math.sin(f * step);
};

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

export const Path = (props: Props) => {
  const [progress, setProgress] = useState<Progress>({});

  const ref = useRef<ScrollView>(undefined!);

  useEffect(() => {
    let min = 0;
    let index = 0;

    for (const done of Object.values(progress)) {
      if (!done) {
        min = index;
        break;
      }
      index++;
    }

    ref.current?.scrollTo({
      y: Math.max(0, min * 96),
    });
  }, [progress]);

  useEffectAsync(async () => {
    const p = await Db.get<Progress>(
      'progress',
      Object.fromEntries(Lessons.map((lesson) => [lesson.id, false])),
    );

    setProgress(p);
  }, []);

  return (
    <ScrollView ref={ref} style={{ width: '100%' }}>
      <View style={styles.container}>
        {Lessons.map((lesson, index) => {
          return (
            <View
              key={lesson.id}
              style={{
                left: sin(index),
              }}
            >
              <PathButton
                index={index}
                done={progress[lesson.id]}
                onPress={() => {
                  if (lesson.tasks.length > 0) {
                    props.navigation.navigate('lesson', { lesson });
                  }
                }}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

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
import { PathButton } from './path_button';

const sin = (step: number) => {
  const a = 96;
  const s = 8;
  const f = (Math.PI * 2) / s;

  return a * Math.sin(f * step);
};

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

export const Path = (props: Props) => {
  const [progress, setProgress] = useState(0);

  const ref = useRef<ScrollView>(undefined!);

  useEffect(() => {
    ref.current?.scrollTo({
      y: Math.max(0, progress * 96),
    });
  }, [progress]);

  useEffectAsync(async () => {
    const p = await Db.get('progress', 0);

    console.info('Progress: ', p);

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
                force={progress >= Lessons.length}
                progress={progress}
                index={index}
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

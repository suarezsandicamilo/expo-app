//

// React

import React from 'react';

// React Native

import { BackHandler, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Expo

import { getAvailableVoicesAsync } from 'expo-speech';
import { StatusBar } from 'expo-status-bar';

// React Navigation

import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { Colors } from '@/constants';
import { Cover, IconButton } from '@/components';
import { LockProvider } from '@/contexts';
import { Lessons } from '@/data';
import { Db } from '@/db';
import { useEffectAsync } from '@/hooks';
import { RootStackParamList } from '@/shared';
import { Progress } from '@/types';
import { PathScreen } from './path_screen';

type Props = NativeStackScreenProps<RootStackParamList, 'home'>;

export const HomeScreen = (props: Props) => {
  const insets = useSafeAreaInsets();

  useEffectAsync(async () => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    const data = await Db.get<string>('voice', '');

    if (data !== '') {
      return;
    }

    const voices = await getAvailableVoicesAsync();

    if (voices.length === 0) {
      throw new Error('There are no voices in this device');
    }

    const voice = voices.find((v) => {
      return v.language.includes('es');
    });

    if (voice == undefined) {
      throw new Error('There are no Spanish voices in this device');
    }

    await Db.set<string>('voice', voice.identifier);
  }, []);

  useFocusEffect(() => {
    const fn = async () => {
      try {
        await Db.get<Progress>('progress');
      } catch {
        await Db.set<Progress>(
          'progress',
          Object.fromEntries(Lessons.map((lesson) => [lesson.id, false])),
        );
      }
    };

    fn();
  });

  return (
    <LockProvider>
      <Cover opacity={0.5}>
        <View
          style={[
            styles.container_1,
            {
              paddingTop: insets.top * 1.5,
            },
          ]}
        >
          <InHomeScreen {...props} />
        </View>
      </Cover>
    </LockProvider>
  );
};

export const InHomeScreen = (props: Props) => {
  return (
    <>
      <StatusBar style="auto" backgroundColor={Colors['theme-1']} />
      <View style={styles.container_2}>
        <IconButton
          name="menu"
          onPress={() => {
            props.navigation.navigate('credits');
          }}
        />
      </View>
      <View style={styles.container_3}>
        <PathScreen {...props} />
      </View>
    </>
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 24,
    width: '100%',
  },
  container_3: {
    alignItems: 'center',
    flex: 11,
    justifyContent: 'center',
    width: '100%',
  },
});

//

// React

import { useEffect } from 'react';

// React Native

import { StyleSheet, View } from 'react-native';

// Expo

import { StatusBar } from 'expo-status-bar';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

// React Navigation

import { useNavigation, useRoute } from '@react-navigation/native';

// React Native Safe Area Context

import { useSafeAreaInsets } from 'react-native-safe-area-context';

// App

import { Card } from '@/components';

import { Db } from '@/db';

import { LockProvider, useSound } from '@/hooks';

import { delay } from '@/_';

//

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#8bc34a',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 35,
    fontStyle: 'italic',
  },
});

export const VictoryScreen = () => {
  return (
    <LockProvider>
      <InVictoryScreen />
    </LockProvider>
  );
};

const InVictoryScreen = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const correct = useSound('correct');

  const lessonIndex = route.params.lessonIndex;

  useEffect(() => {
    const fn = async () => {
      const progress = await Db.get('progress', 1000);

      if (progress === lessonIndex) {
        await Db.set('progress', lessonIndex + 1);
      }

      await correct.play();

      await delay(1250);

      navigation.navigate('Home');
    };

    fn();
  }, [lessonIndex]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top * 2,
        },
      ]}
    >
      <StatusBar style='auto' />
      <Card style={styles.card}>
        <Icon name='trophy' color='#ffffff' size={192} />
      </Card>
    </View>
  );
};

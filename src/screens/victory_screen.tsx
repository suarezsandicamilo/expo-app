//

// React

import { useEffect } from 'react';

// React Native

import { StyleSheet, View } from 'react-native';

// Expo

import { StatusBar } from 'expo-status-bar';

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// React Navigation

import { useNavigation, useRoute } from '@react-navigation/native';

// React Native Safe Area Context

import { useSafeAreaInsets } from 'react-native-safe-area-context';

// App

import { Button, Card } from '@/components';

import { Db } from '@/db';

import { LockProvider, useSound } from '@/hooks';

import { delay } from '@/shared';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#8bc34a',
    borderRadius: 24,
    justifyContent: 'center',
    height: 96,
    width: 256,
  },
  card: {
    backgroundColor: '#8bc34a',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
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

  const victory = useSound('victory');

  const lessonIndex = route.params.lessonIndex;

  useEffect(() => {
    const fn = async () => {
      const progress = await Db.get('progress', 1000);

      if (progress === lessonIndex) {
        await Db.set('progress', lessonIndex + 1);
      }

      await delay(500);

      await victory.play();
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
      <View style={styles.container}>
        <Card style={styles.card}>
          <MaterialCommunityIcons name='trophy' color='#ffffff' size={192} />
        </Card>
      </View>
      <View style={styles.container}>
        <Button
          style={styles.button}
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          <MaterialIcons name='arrow-right' color='#ffffff' size={96} />
        </Button>
      </View>
    </View>
  );
};

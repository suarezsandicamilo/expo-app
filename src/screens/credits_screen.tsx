//

// React

import React from 'react';

// React Native

import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Expo

import { StatusBar } from 'expo-status-bar';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Ap

import { Colors } from '@/constants';
import { LockProvider } from '@/contexts';
import { RootStackParamList } from '@/shared';
import { IconButton } from '@/components';

type Props = NativeStackScreenProps<RootStackParamList, 'credits'>;

export const CreditsScreen = (props: Props) => {
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
        <InCreditsScreen {...props} />
      </View>
    </LockProvider>
  );
};

export const InCreditsScreen = (props: Props) => {
  return (
    <>
      <StatusBar style="auto" backgroundColor={Colors['theme-1']} />
      <View style={styles.container_2}>
        <IconButton
          name="arrow-back"
          onPress={() => {
            props.navigation.navigate('home');
          }}
        />
      </View>
      <View style={styles.container_3}></View>
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
    justifyContent: 'flex-start',
    paddingLeft: 24,
    width: '100%',
  },
  container_3: {
    alignItems: 'center',
    flex: 11,
    justifyContent: 'center',
    width: '100%',
  },
});

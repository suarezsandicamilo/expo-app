//

// React

import React from 'react';

// React Native

import { Image, StyleSheet, Text, View } from 'react-native';

// Expo

import { StatusBar } from 'expo-status-bar';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { Cover, IconButton } from '@/components';
import { Colors } from '@/constants';
import { LockProvider } from '@/contexts';
import { RootStackParamList } from '@/shared';

type Props = NativeStackScreenProps<RootStackParamList, 'cover'>;

export const CoverScreen = (props: Props) => {
  return (
    <LockProvider>
      <Cover opacity={0.8}>
        <InCoverScreen {...props} />
      </Cover>
    </LockProvider>
  );
};

export const InCoverScreen = (props: Props) => {
  return (
    <>
      <StatusBar style="auto" backgroundColor={Colors['theme-1']} />
      <Image source={require('@/../assets/icon.png')} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.text}>Fono Aventura</Text>
      </View>
      <IconButton
        name="arrow-forward"
        size={96}
        onPress={() => {
          props.navigation.navigate('home');
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors['theme-1'],
    borderRadius: 8,
    height: 72,
    justifyContent: 'center',
    width: 288,
  },
  image: {
    alignItems: 'center',
    borderRadius: 32,
    elevation: 8,
    height: 192,
    justifyContent: 'center',
    padding: 12,
    resizeMode: 'center',
    width: 192,
  },
  text: {
    color: Colors['text-2'],
    fontFamily: 'PatrickHand',
    fontSize: 32,
    textTransform: 'uppercase',
  },
});

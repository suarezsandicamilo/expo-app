//

// React

import React from 'react';

// React Native

import { Image, ImageBackground, StyleSheet } from 'react-native';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { Button, IconButton } from '@/components';
import { LockProvider } from '@/contexts';
import { RootStackParamList } from '@/shared';

type Props = NativeStackScreenProps<RootStackParamList, 'cover'>;

export const CoverScreen = (props: Props) => {
  return (
    <LockProvider>
      <InCoverScreen {...props} />
    </LockProvider>
  );
};

export const InCoverScreen = (props: Props) => {
  return (
    <ImageBackground
      source={require('@/../assets/background_2.png')}
      style={styles.cover}
      resizeMode="cover"
    >
      <Image source={require('@/../assets/icon.png')} style={styles.image} />
      <Button text="Fono Aventura" active={false} />
      <IconButton
        name="arrow-forward"
        size={96}
        onPress={() => {
          props.navigation.navigate('home');
        }}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cover: {
    alignItems: 'center',
    flex: 1,
    gap: 24,
    justifyContent: 'center',
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
});

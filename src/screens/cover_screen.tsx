//

// React

import React from 'react';

// React Native

import { Image, StyleSheet } from 'react-native';

// React Navigation

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// App

import { Button, Cover, IconButton } from '@/components';
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
      <Image source={require('@/../assets/icon.png')} style={styles.image} />
      <Button text="Fono Aventura" active={false} />
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

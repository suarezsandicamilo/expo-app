//

// React Native

import { StyleSheet, View } from 'react-native';

// Expo

import { StatusBar } from 'expo-status-bar';

// React Native Safe Area Context

import { useSafeAreaInsets } from 'react-native-safe-area-context';

// App

import { Path } from '@/components';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
  },
});

export const HomeScreen = () => {
  const insets = useSafeAreaInsets();

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
      <Path />
    </View>
  );
};

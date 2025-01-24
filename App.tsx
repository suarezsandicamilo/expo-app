//

// React Native

import { ActivityIndicator } from 'react-native';

// Expo

import { useFonts } from 'expo-font';

// React Navigation

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// App

import { EndScreen, HomeScreen, LessonScreen } from '@/screens';
import { RootStackParamList } from '@/shared';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const [ready] = useFonts({
    PatrickHand: require('@/../assets/fonts/PatrickHand-Regular.ttf'),
  });

  if (!ready) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          animation: 'fade',
          headerShown: false,
        }}
      >
        <RootStack.Screen name="home" component={HomeScreen} />
        <RootStack.Screen name="lesson" component={LessonScreen} />
        <RootStack.Screen name="end" component={EndScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

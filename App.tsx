//

// React Navigation

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// App

import { HomeScreen, LessonScreen, VictoryScreen } from '@/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Lesson' component={LessonScreen} />
        <Stack.Screen name='Victory' component={VictoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

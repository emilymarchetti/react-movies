import * as React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

function App() {
  return (
    <>
    <StatusBar barStyle="light-content"></StatusBar>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Inicio' }} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
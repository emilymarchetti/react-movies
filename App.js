import * as React from 'react';
import { NavigationContainer, DarkTheme, BaseRouter } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/HomeScreen';
import { StatusBar } from 'react-native';
import DetailScreen from './src/pages/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <>
    <StatusBar barStyle="light-content"></StatusBar>
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Inicio' }} component={HomeScreen} />
        <Stack.Screen name="Detail" options={({ route }) => ({title: route.params.movie.title })} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

export default App;
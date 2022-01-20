import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import OneRepMax from './src/screens/OneRepMax';
import Plan from './src/screens/Plan';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Plan" component={Plan} />
        <Stack.Screen name="One Rep Max" component={OneRepMax} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//I gotta put my fuckinnn manifesto in here somewhere. Should it be part of the main flow or off to the side

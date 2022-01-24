import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import OneRepMax from './src/screens/OneRepMax';
import Plan from './src/screens/Plan';
import UserContext from './src/context/user';
import PlanContext from './src/context/plan';
import About from './src/screens/About';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F3A8F',
    secondary: '#FE7E6D',
    lblue: '#CCD1E4',
    pinktan: '#FEECE9',
  },
};

//customize theme l8r

function App() {
  return (
    <UserContext>
      <PlanContext>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="Plan" component={Plan} />
              <Stack.Screen name="About" component={About} />
              <Stack.Screen
                name="ORM"
                component={OneRepMax}
                options={{ title: 'One Rep Max' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PlanContext>
    </UserContext>
  );
}

export default App;

//I gotta put my fuckinnn manifesto in here somewhere. Should it be part of the main flow or off to the side

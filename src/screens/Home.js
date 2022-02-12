import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Title } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { AppLoading } from 'expo';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import React from 'react';

const Home = ({ navigation }) => {
  const [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>JAYA'S GYM APP</Title>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
        mode="contained"
        style={styles.button1}
        dark={true}
        labelStyle={{ color: '#1b3030', fontSize: 18 }}
        contentStyle={{ height: 60 }}
      >
        Login
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}
        mode="contained"
        style={styles.button2}
        labelStyle={{ color: '#1b3030', fontSize: 18 }}
        contentStyle={{ height: 60 }}
      >
        Register
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('ORM');
        }}
        mode="contained"
        style={styles.button}
      >
        Continue as Guest
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('About');
        }}
        mode="contained"
        style={styles.button}
      >
        About
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#2c4443',
    height: '100%',
  },
  button1: {
    borderRadius: 6,
    marginVertical: 15,
    marginHorizontal: 30,
    padding: 3,
    backgroundColor: '#b2bfbe',
  },
  button2: {
    borderRadius: 6,
    marginVertical: 15,
    marginHorizontal: 30,
    padding: 3,
    backgroundColor: '#4f6866',
  },
  button3: {
    marginVertical: 15,
    marginHorizontal: 30,
    padding: 3,
  },
  title: {
    lineHeight: 70,
    paddingTop: 40,
    paddingHorizontal: 40,
    fontFamily: 'Montserrat_900Black',
    fontSize: 70,
    textAlign: 'center',
    color: 'white',
  },
});

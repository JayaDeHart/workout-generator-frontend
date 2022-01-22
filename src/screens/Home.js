import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
      >
        Login
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}
      >
        Register
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('ORM');
        }}
      >
        Continue as Guest
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

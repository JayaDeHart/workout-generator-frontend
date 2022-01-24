import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { Title } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import React from 'react';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View>
      <Title
        style={{
          color: colors.secondary,
          textAlign: 'center',
          fontSize: 25,
          marginVertical: 15,
          marginHorizontal: 30,
        }}
      >
        Lift Gainer 9000 Ultra Mode
      </Title>
      <Button
        onPress={() => {
          navigation.navigate('Login');
        }}
        mode="contained"
        style={styles.button}
      >
        Login
      </Button>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}
        mode="contained"
        style={styles.button}
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
  button: {
    marginVertical: 15,
    marginHorizontal: 30,
    padding: 3,
  },
});

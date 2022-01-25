import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { PlanContext } from '../context/plan';
import Week from '../components/Week';

const Plan = () => {
  const { plan } = useContext(PlanContext);

  console.log(plan);

  return (
    <View>
      <Text>Here's ur dope plan</Text>
      {Object.entries(plan.hypertrophy).map(([key, value]) => (
        <Week week={key} exercise={value} />
      ))}
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({});

//https://www.npmjs.com/package/html-to-image

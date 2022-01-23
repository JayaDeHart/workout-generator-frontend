import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { PlanContext } from '../context/plan';

const Plan = () => {
  const { plan } = useContext(PlanContext);

  console.log(plan);

  return (
    <View>
      <Text>Here's ur dope plan</Text>
    </View>
  );
};

export default Plan;

const styles = StyleSheet.create({});

//https://www.npmjs.com/package/html-to-image

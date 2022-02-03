import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Week = ({ week, exercise }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>{week}</Text>
        <Text>Order: 1, Rest, 2, Rest, 1, Rest, 2</Text>
        <Text>Sets: {exercise[0].sets}</Text>
        <Text>Reps: {exercise[0].reps}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.day}></View>
        <View style={styles.day}></View>
      </View>
    </View>
  );
};

export default Week;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
  },
});

// [
//   Object {
//     "exercise": "ohp",
//     "reps": 6,
//     "sets": 4,
//     "weight": "1.1",
//   },
//   Object {
//     "exercise": "row",
//     "reps": 6,
//     "sets": 4,
//     "weight": "1.1",
//   },
//   Object {
//     "exercise": "deadlift",
//     "reps": 6,
//     "sets": 4,
//     "weight": "1.1",
//   },
//   Object {
//     "exercise": "squat",
//     "reps": 6,
//     "sets": 4,
//     "weight": "1.1",
//   },
//   Object {
//     "exercise": "bench",
//     "reps": 6,
//     "sets": 4,
//     "weight": "1.1",
//   },
// ]

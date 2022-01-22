import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-native-paper';
import ControlledInput from '../components/ControlledInput';
import * as yup from 'yup';

const schema = yup
  .object({
    bench: yup
      .number()
      .typeError('Your answer must be a number')
      .positive("You can't lift negative weight")
      .required('You must enter a number'),
    squat: yup
      .number()
      .typeError('Your answer must be a number')
      .positive("You can't lift negative weight")
      .required('You must enter a number'),
    deadlift: yup
      .number()
      .typeError('Your answer must be a number')
      .positive("You can't lift negative weight")
      .required('You must enter a number'),
    row: yup
      .number()
      .typeError('Your answer must be a number')
      .positive("You can't lift negative weight")
      .required('You must enter a number'),
    ohp: yup
      .number()
      .typeError('Your answer must be a number')
      .positive("You can't lift negative weight")
      .required('You must enter a number'),
  })
  .required();

const OneRepMax = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });

  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <ControlledInput
        title="Bench"
        name="bench"
        control={control}
        errors={errors}
      />
      <ControlledInput
        title="Squat"
        name="squat"
        control={control}
        errors={errors}
      />
      <ControlledInput
        title="Row"
        name="row"
        control={control}
        errors={errors}
      />
      <ControlledInput
        title="Deadlift"
        name="deadlift"
        control={control}
        errors={errors}
      />
      <ControlledInput
        title="Overhead Press"
        name="ohp"
        control={control}
        errors={errors}
      />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default OneRepMax;

const styles = StyleSheet.create({});

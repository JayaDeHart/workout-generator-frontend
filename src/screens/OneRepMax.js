import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-native-paper';
import ControlledInput from '../components/ControlledInput';
import { PlanContext } from '../context/plan';
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

const OneRepMax = ({ navigation }) => {
  const { plan, setPlanWithORMS } = useContext(PlanContext);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: 'onTouched' });

  const onSubmit = (data) => {
    setPlanWithORMS(data);
    navigation.navigate('Plan');
  };

  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();

  return (
    <View>
      <ControlledInput
        title="Bench"
        name="bench"
        control={control}
        errors={errors}
        ref={null}
        nextref={inputRef2}
      />
      <ControlledInput
        title="Squat"
        name="squat"
        control={control}
        errors={errors}
        ref={inputRef2}
        nextref={inputRef3}
      />
      <ControlledInput
        title="Row"
        name="row"
        control={control}
        errors={errors}
        ref={inputRef3}
        nextref={inputRef4}
      />
      <ControlledInput
        title="Deadlift"
        name="deadlift"
        control={control}
        errors={errors}
        ref={inputRef4}
        nextref={inputRef5}
      />
      <ControlledInput
        title="Overhead Press"
        name="ohp"
        control={control}
        errors={errors}
        ref={inputRef5}
        nextref={null}
      />
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default OneRepMax;

const styles = StyleSheet.create({});

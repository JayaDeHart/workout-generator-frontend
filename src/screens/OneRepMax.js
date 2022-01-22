import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-native-paper';
import * as yup from 'yup';

const schema = yup
  .object({
    bench: yup.number().positive().integer().required(),
  })
  .required();

const OneRepMax = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="bench"
      />

      <Button onPress={handleSubmit(onSubmit)}>Sumbit</Button>
    </View>
  );
};

export default OneRepMax;

const styles = StyleSheet.create({});

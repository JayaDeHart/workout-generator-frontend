import { StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import React from 'react';

const ControlledInput = ({ title, name, control, errors }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
          />
        )}
        name={name}
      />
      {errors[name] && <Text>{errors[name].message}</Text>}
    </View>
  );
};

export default ControlledInput;

const styles = StyleSheet.create({});

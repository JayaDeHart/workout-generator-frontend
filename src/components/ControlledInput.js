import { StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import React from 'react';

const ControlledInput = React.forwardRef((props, ref) => {
  const { title, name, control, errors, nextref, inputType } = props;
  return (
    <View style={styles.group}>
      <Text style={styles.text}>{title}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType={inputType}
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            ref={ref}
            onSubmitEditing={() => {
              if (nextref) {
                nextref.current.focus();
              }
            }}
          />
        )}
        name={name}
      />
      {errors[name] && <Text style={styles.error}>{errors[name].message}</Text>}
    </View>
  );
});

export default ControlledInput;

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  input: {},
  group: {
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
});

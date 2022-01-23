import { StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import React from 'react';

const ControlledInput = React.forwardRef((props, ref) => {
  const { title, name, control, errors, nextref } = props;
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
      {errors[name] && <Text>{errors[name].message}</Text>}
    </View>
  );
});

export default ControlledInput;

const styles = StyleSheet.create({});

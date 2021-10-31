import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input } from '@ui-kitten/components';

const TextField = ({
  style,
  handleBlur = () => {},
  value,
  secureTextEntry,
  label,
  handleChange = () => {},
}) => {
  return (
    <View style={Styles.fieldStyle}>
      <Text style={Styles.inputLabel}>{label}</Text>
      <Input
        onChangeText={handleChange}
        value={value}
        style={style}
        onBlur={handleBlur}
        style={Styles.inputStyle}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
  },
  inputLabel: {
    fontSize: 12,
    marginBottom: 10,
    color: '#ffffff',
  },
  fieldStyle: {
    marginBottom: 10,
  },
});

export default TextField;

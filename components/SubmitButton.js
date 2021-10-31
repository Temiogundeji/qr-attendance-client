import React from 'react';
import { View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';

const SubmitButton = ({ handleSubmit = () => {}, buttonText }) => {
  return (
    <View>
      <Button onPress={handleSubmit} />
    </View>
  );
};

export default SubmitButton;

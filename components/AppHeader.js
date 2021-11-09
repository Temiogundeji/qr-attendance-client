import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { globalStyles } from '../shared/global';

const AppHeader = ({ username }) => {
  return (
    <View style={Styles.container}>
      <FontAwesome5 name="user-circle" size={38} color="#18615B" />
      <Text style={[Styles.welcomeText, globalStyles.secondaryColor]}>Welcome, {username}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: '1%',
    paddingTop: '10%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  welcomeText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'arlon-medium',
  },
});

export default AppHeader;
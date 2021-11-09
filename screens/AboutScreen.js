import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Avatar } from '@ui-kitten/components';
import { globalStyles } from '../shared';

const AboutScreen = ({ navigation }) => {
  const user = useSelector((state) => state.login.user);
  const PROFILE_IMAGE = { uri: user.profilePics };
  return (
    <View style={Styles.container}>
      <Card style={Styles.centered}>
        <View style={Styles.profileCard}>
          <Text style={Styles.profileTitle}>About Polytendance v1</Text>
          <Text style={Styles.profileCardText}>
            This app was built to make it easier for schools to manage their student attendance
          </Text>
        </View>
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 30,
    marginTop: 10,
    // height: 100,
    width: '100%',
    alignItems: 'center',
  },
  profileCardText: {
    color: '#555555',
    fontSize: 14,
    fontFamily: 'arlon-medium',
  },
  profileTitle: {
    fontSize: 18,
    fontFamily: 'arlon-medium',
    color: '#18615B',
    marginBottom: 12,
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
  },
  avatar: {
    width: 45,
  },
});

export default AboutScreen;

import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Avatar } from '@ui-kitten/components';
import { globalStyles } from '../shared';

const ProfileScreen = ({ navigation }) => {
  const user = useSelector((state) => state.login.user);

  const PROFILE_IMAGE = { uri: user.profilePics };

  return (
    <View style={Styles.container}>
      <Card style={Styles.centered}>
        <View>
          <Image
            style={Styles.avatar}
            source={PROFILE_IMAGE}
            style={{ height: 250, resizeMode: 'contain', margin: 5 }}
          />
        </View>
        <View style={Styles.profileCard}>
          <Text style={Styles.profileCardText}>{user.username}</Text>
        </View>
        <View style={Styles.profileCard}>
          <Text style={Styles.profileCardText}>{user.email}</Text>
        </View>
        {/* <View style={Styles.profileCard}>
          <Text style={Styles.profileCardText}>{user.matricNum}</Text>
        </View> */}
      </Card>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#dc780b',
    padding: 20,
    marginTop: 10,
    // height: 100,
    width: '100%',
    alignItems: 'center',
  },
  profileCardText: {
    color: '#18615B',
    fontSize: 16,
    fontFamily: 'arlon-medium',
  },
  profileTitle: {
    fontSize: 16,
    fontFamily: 'arlon-medium',
    color: '#dc780b',
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

export default ProfileScreen;
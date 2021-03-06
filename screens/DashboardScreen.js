import React from 'react';
import {  StyleSheet, View, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { images } from '../shared/global';
import { globalStyles } from '../shared/global';
import { Card, Text } from '@ui-kitten/components';
import AppHeader from '../components/AppHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {
  const user = useSelector((state) => state.login.user);
  return (
    <View style={globalStyles.secondaryBackground}>
      <AppHeader username={user.username} />
      <View style={Styles.container}>
        <View style={Styles.header}>
          <Text style={globalStyles.headingText}>Track your attendance like never before!</Text>
        </View>
        <View>
          <View style={Styles.menuCards}>
            <View style={Styles.menuRow}>
              <Card style={[Styles.menuCard, globalStyles.background]}>
                <TouchableOpacity
                  style={Styles.cardCol}
                  onPress={() => navigation.navigate('AttendanceScreen')}
                >
                  <Ionicons name="checkmark-done" size={34} color="#ffffff" />
                  <Text style={Styles.cardText}>Attend Class</Text>
                </TouchableOpacity>
              </Card>
              <Card style={[Styles.menuCard, globalStyles.background]}>
                <TouchableOpacity
                  style={Styles.cardCol}
                  onPress={() => navigation.navigate('HistoryScreen')}
                >
                  <MaterialCommunityIcons name="history" size={34} color="#ffffff" />
                  <Text style={Styles.cardText}>History</Text>
                </TouchableOpacity>
              </Card>
            </View>
            <View style={Styles.menuRow}>
              <Card style={[Styles.menuCard, globalStyles.background]}>
                <TouchableOpacity
                  style={Styles.cardCol}
                  onPress={() => navigation.navigate('AnalyticsScreen')}
                >
                  <Feather name="bar-chart" size={34} color="#ffffff" />
                  <Text style={Styles.cardText}>Analytics</Text>
                </TouchableOpacity>
              </Card>
              <Card style={[Styles.menuCard, globalStyles.background]}>
                <TouchableOpacity
                  style={Styles.cardCol}
                  onPress={() => navigation.navigate('ProfileScreen')}
                >
                  <AntDesign name="user" size={34} color="#ffffff" />
                  <Text style={Styles.cardText}>Profile</Text>
                </TouchableOpacity>
              </Card>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 15,
    height: '100%',
  },
  cardCol: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 45,
  },
  menuCards: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: '40%',
  },
  menuRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  menuCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '47.5%',
    height: 150,
    shadowColor: '#000',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardText: {
    color: '#ffffff',
    fontFamily: 'arlon-medium',
  },
});

export default DashboardScreen;
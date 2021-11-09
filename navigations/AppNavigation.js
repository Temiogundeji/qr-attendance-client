import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GettingStartedScreen from '../screens/GettingStartedScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import AboutScreen from '../screens/AboutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabs from './BottomNavigation';
import DashboardScreen from '../screens/DashboardScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restSpeedThreshold: 0.01,
  },
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GettingStartedScreen"
        screenOptions={{
          headerShown: false,
        }}
        screenOptions={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      >
        <Stack.Screen
          name="GettingStartedScreen"
          options={{
            headerShown: false,
          }}
          component={GettingStartedScreen}
        ></Stack.Screen>
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabs}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{
            headerShown: true,
            title: 'Analytics',
            headerTintColor: '#18615B',
            headerTitleStyle: {
              // fontWeight: "bold",
              fontFamily: 'arlon-medium',
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="DashboardScreen"
          component={BottomTabs}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="AttendanceScreen"
          component={AttendanceScreen}
          options={{
            headerShown: true,
            title: 'Attendances',
            headerTintColor: '#18615B',
            headerTitleStyle: {
              // fontWeight: "bold",
              fontFamily: 'arlon-medium',
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="HistoryScreen"
          component={HistoryScreen}
          options={{
            headerShown: true,
            title: 'History',
            headerTintColor: '#18615B',
            headerTitleStyle: {
              // fontWeight: "bold",
              fontFamily: 'arlon-medium',
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerShown: true,
            title: 'Profile',
            headerTintColor: '#18615B',
            headerTitleStyle: {
              fontFamily: 'arlon-medium',
            },
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

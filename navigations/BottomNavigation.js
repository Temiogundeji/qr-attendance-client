import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

import AboutScreen from "../screens/AboutScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
    return (
      <Tab.Navigator
        initialRouteName="DashboardScreen"
        shifting={false}
        sceneAnimationEnabled={true}
        activeColor="#dc780b"
        barStyle={{ backgroundColor: '#cccccc'}}
      >
        <Tab.Screen
          name="Home"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Feather name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <Feather name="info" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };


  export default BottomTabs;
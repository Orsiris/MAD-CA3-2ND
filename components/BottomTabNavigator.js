import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import {HomeStackNavigator} from './HomeStackNavigator';
import CalendarScreen from './CalendarStackScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Task" >
      <Tab.Screen
        name={'Task'}
        component={HomeStackNavigator}

        options={{
          tabBarLabel: 'Task',
          headerShown: false,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-check-multiple-outline" color={color} size={size} />
          ),

        }}
      />
      <Tab.Screen
        name={' '}
        component={CalendarScreen}

        options={{
          tabBarLabel: 'Calendar',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#5C71E6',
            height: 90
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;

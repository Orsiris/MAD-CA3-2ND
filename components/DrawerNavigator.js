import * as React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import FeedbackStackNavigator from './FeedbackStackNavigator';
import SettingStackNavigator from './SettingStackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import BottomTabNavigator from './BottomTabNavigator';


const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{ flex: 1, paddingTop: 0 }} scrollEnabled={false}>
        <View
          style={{
            backgroundColor: '#5C70E6',
            height: 140,
            justifyContent: 'flex-end',
            bottom: 10,
            paddingBottom: 40,
          }}>
          <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', color: '#F2F2F2' }}>To-Do List</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator

      screenOptions={() => ({
        headerTintColor: 'white',
        headerTransparent: true

      })}

      drawerContent={DrawerHeaderContent}>

      <Drawer.Screen
        name={'  '}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Feedback'}
        component={FeedbackStackNavigator}
        options={{
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 19
          },
          drawerLabel: 'Feedback',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons name="bullhorn-outline" color={color} size={size} />
          ),
          headerStyle: {
            backgroundColor: 'red'
          },
        }}
      />

      <Drawer.Screen
        name={'Settings'}
        component={SettingStackNavigator}
        options={{
          drawerLabel: 'Settings',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'White',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});

export default DrawerNavigator;

import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';
import { TaskProvider } from './components/Context';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TaskProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerNavigator">
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </TaskProvider>
  );
};

export default App;
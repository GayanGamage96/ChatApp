import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import StackScreen from '../screens/StackScreen';
const Stack = createNativeStackNavigator();
const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>

      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="stack" component={StackScreen} options={{ headerShown: false }} />
       


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
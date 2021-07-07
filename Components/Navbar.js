import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from './ProfileScreen';
import {HomeScreen} from './HomeScreen'

const Stack = createStackNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
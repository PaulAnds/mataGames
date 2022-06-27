import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

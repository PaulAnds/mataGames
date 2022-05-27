import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Platform } from 'react-native';

import HomeScreen from './HomeScreen';
import VideoGameScreen from './VideoGameScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const {createNavigator} = Platform.select({
  ios:{createNavigator:Tab},
  android:{createNavigator:Drawer},
})

export default function App() {
  return (
    <NavigationContainer>
      <createNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-sharp';
          } else if (route.name === 'Settings') {
            iconName = 'list-sharp';
          }else if (route.name === "Games"){
            iconName = 'apps-sharp'; 
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >   
        <createNavigator.Screen name= "Home" component={HomeScreen}/>
        <createNavigator.Screen name= "Games" component={VideoGameScreen}/>
        <createNavigator.Screen name= "Settings" component={SettingsScreen}/>
      </createNavigator.Navigator>
    </NavigationContainer>
  );
}


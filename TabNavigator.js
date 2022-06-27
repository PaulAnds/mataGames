import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from "./screens/HomeScreen";
import CreditsScreen  from "./screens/CreditsScreen";
import { MainStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          let rn = route.name

          if( rn === "Home")
          iconName = focused ? 'home' : 'home-outline';
          else if(rn === "Games")
          iconName = focused ? 'game-controller' : 'game-controller-outline';
          else if (rn == "Credits")
          iconName = 'ellipsis-horizontal-sharp';

          return <Ionicons name={iconName} size={size} color={ color } />
        },
        tabBarActiveTintColor: '#9c33ff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'black',
          borderTopColor: "#9c33ff", 
          borderTopWidth: 2,
        },
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "#9c33ff",
          borderBottomWidth: 1,
        },
        headerTintColor: "#9c33ff",
        headerBackTitle: "Back",
        headerTitleAlign:'center'
      })}
      
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        />
      <Tab.Screen name="Games" component={MainStackNavigator} options={{ headerShown: false}}/>
      <Tab.Screen name="Credits" component={CreditsScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
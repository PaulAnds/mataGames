import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "black",
  },
  headerTintColor: "green",
  headerBackTitle: "green",
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={screenOptionStyle}>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Store" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
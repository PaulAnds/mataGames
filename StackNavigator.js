import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Store from "./screens/Store";
import GuessMyNumber  from "./screens/GuessMyNumber";
import GuessYourNumber  from "./screens/GuessYourNumber";
import { ChooseYourGameScreen } from "./screens/ChooseYourGameScreen";
import PPoT from "./screens/PPot";
import MemoryGame from "./screens/MemoryGame";
const Stack = createNativeStackNavigator();


const MainStackNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderColor: "#9c33ff"
                  },
                  headerTintColor: "#9c33ff",
                  headerBackTitle: "Back",
                  headerTitleAlign:'center'
            }}
        >
            <Stack.Screen name="VideoGames" component={Store} />
            <Stack.Screen name="GuessNumbers" component={GuessStackNavigator}  options={{ headerShown: false}}/>
            <Stack.Screen name="PPoT" component={PPoT}  />
            <Stack.Screen name="MemoryGame" component={MemoryGame}  />
        </Stack.Navigator>
    )
}

const GuessStackNavigator = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black",
                    borderColor: "#9c33ff"
                  },
                  headerTintColor: "#9c33ff",
                  headerBackTitle: "Back",
                  headerTitleAlign:'center'
            }}
        >
            <Stack.Screen name="Elige Tu juego" component={ChooseYourGameScreen}  />
            <Stack.Screen name="GuessMyNumber" component={GuessMyNumber}  />
            <Stack.Screen name="GuessYourNumber" component={GuessYourNumber}  />
        </Stack.Navigator>
    )
}
export { MainStackNavigator };
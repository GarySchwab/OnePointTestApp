import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Components/HomeScreen";
import DataScreen from "../Components/DataScreen";

/**
 * Navigation.js
 * Ce fichier définit le StackNavigator utilisé pour naviguer entre les différentes vues de l'application.
 * L'application comporte deux vues :
 *  - HomeScreen, l'écran d'accueil
 *  - DataScreen, la vue contenant la liste de données
 */

const StackNavigator = createStackNavigator();
function MainStack() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNavigator.Screen name="Home" component={HomeScreen} />
      <StackNavigator.Screen name="Data" component={DataScreen} />
    </StackNavigator.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

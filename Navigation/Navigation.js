import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Components/HomeScreen";
import DataScreen from "../Components/DataScreen";

const StackNavigator = createStackNavigator();
function MainStack() {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNavigator.Screen name="Data" component={DataScreen} />
      <StackNavigator.Screen name="Home" component={HomeScreen} />
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

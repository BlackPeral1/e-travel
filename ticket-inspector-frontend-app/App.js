import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarCodeScan from "./src/screens/BarcodeScanner";
import HomeScreen from "./src/screens/Home";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BarCodeScan" component={BarCodeScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

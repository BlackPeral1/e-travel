import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const NavigateToScan = (props) => {
  props.navigation.navigate("BarCodeScan");
};
const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="TO Scan" onPress={() => NavigateToScan(props)}></Button>
    </View>
  );
};
export default HomeScreen;

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 300,
    backgroundColor: '#fff',
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12
  }
});

const RouteScreen = ({ navigation }) => {
  const [routes, setRoutes] = useState(['92 (Colombo - Kuliyapitiya)', '54 (Colombo - Chilw)', '05 (Colombo - Kurunagale)']);
  const [route, setroute] = useState(routes[0]);

  const selectRoute = async () => {
    await storeData();
    navigation.navigate('Home')
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@route', route)
    } catch (e) {
      // saving error
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ marginBottom: 30, fontSize: 18 }}>Select the route :</Text>
      <Picker
        style={styles.picker}
        selectedValue={route}
        onValueChange={(itemValue, itemIndex) =>
          setroute(itemValue)
        } >
        {routes.map((city) => {
          return (
            <Picker.Item label={city} value={city} />
          )
        })}
      </Picker>
      <Button
        title="Select"
        onPress={selectRoute} />
    </View>
  );
};
export default RouteScreen;

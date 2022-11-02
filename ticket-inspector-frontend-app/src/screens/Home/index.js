import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  useEffect(async () => {
    try {
      const route = await AsyncStorage.getItem('@route')
      setCity(route)
    } catch (e) {
      // error reading value
    }
  }, [])
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.title}>
        <Text style={{ fontSize: 28, fontWeight: '700', color: 'gray' }}>Home</Text>
      </View>
      <Text style={{ fontSize: 22, fontWeight: '600', color: 'gray', }}>{city}</Text>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.item}
          onPress={() => navigation.navigate('BarCodeScan')}
        >
          <Image source={require('../../assets/images/qr-code.png')} style={styles.img} />
          <Text>To Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}
        >
          <Image source={require('../../assets/images/transaction.png')} style={styles.img} />
          <Text>Transaction</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.bottomView}
        onPress={() => navigation.navigate('Route')}
      >
        <Text style={{ color: '#2196f3', }}>Change Route</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  menu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  item: {
    width: '40%',
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 25,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  img: {
    width: 100,
    height: 100
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 80,
  }
})
export default HomeScreen;

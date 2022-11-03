import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PaymentHome({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headContainer}>
                <ImageBackground style={styles.defaultBg} resizeMode={'cover'}
                                 source={require('../../assets/images/login/bgauth.jpg')}/>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Payment Home Page</Text>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.item}
                    // key={value}
                    //               onPress={() => navigation.navigate('MyQr')}
                    // style={[styles.button, selectedValue === value && styles.selected]}
                >
                    <Image source={require('../../assets/images/Payment/applycard.jpeg')} style={styles.img} />
                    <Text style={styles.textName}>Apply Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}
                    // key={value}
                    // onPress={() => setSelectedValue(value)}
                    // style={[styles.button, selectedValue === value && styles.selected]}
                >
                    <Image source={require('../../assets/images/Payment/paymentaccount.jpg')} style={styles.img} />
                    <Text style={styles.textName}>Payments</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}
                    // key={value}
                    // onPress={() => setSelectedValue(value)}
                    // style={[styles.button, selectedValue === value && styles.selected]}
                >
                    <Image source={require('../../assets/images/Payment/addcredit.jpg')} style={styles.img} />
                    <Text style={styles.textName}>Add Credit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}
                    // key={value}
                    // onPress={() => setSelectedValue(value)}
                    // style={[styles.button, selectedValue === value && styles.selected]}
                >
                    <Image source={require('../../assets/images/Payment/account.jpeg')} style={styles.img} />
                    <Text style={styles.textName}>Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%'
    },
    headContainer:{},
    header: {
        flexDirection: 'row',
        marginBottom: 50,
        justifyContent: 'center',
        marginTop: 30
    },
    headerText: {
        fontSize: 24,
        fontWeight: '700',
        // color: 'gray'
        color:'#0c4a6e'
    }, textName: {
        color: "#737373",
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
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
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    img: {
        width: 100,
        height: 100
    }
});
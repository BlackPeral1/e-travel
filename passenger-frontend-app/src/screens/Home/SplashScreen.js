import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {Image, View, Text} from "react-native";

const Splash = () => {
    const [isGo, setIsGo] = useState(true);
    const Navigation = useNavigation();

    useEffect(() => {
        if (isGo === true) {
            setTimeout(() => {
                Navigation.navigate("Login");
                // Navigation.navigate("PaymentCardValidation");
                setIsGo(false);
            }, 2000);
        }
    });

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#22d3ee"}}>
            <Image source={require('../../assets/images/login/ticketsystem.webp')} style={{width: 275, height: 230}}/>
            <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold', color:'#FFFFFF',textShadowRadius:25, marginTop:50}}>WELCOME PASSENGER </Text>
        </View>
    )
}

export default Splash;
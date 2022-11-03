import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import AuthService from "../../services/authService";
import {useNavigation} from "@react-navigation/core";

const Home = () => {
    const [currentUserId, setCurrentUserId] = useState("");
    const [currentUserToken, setCurrentUserToken] = useState("");
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserEmail, setCurrentUserEmail] = useState("");

    const navigation = useNavigation();

    useEffect(() => {
        const getAsyncStorageData = async () => {
            try {
                let user_id = await AuthService.getCurrentUserId();
                let user_name = await AuthService.getCurrentUserName();
                let user_email = await AuthService.getCurrentUserEmail();
                let user_token = await AuthService.getCurrentUserToken();

                await setCurrentUserId(user_id);
                await setCurrentUserName(user_name);
                await setCurrentUserEmail(user_email);
                await setCurrentUserToken(user_token);
            } catch (e) {
                console.log(e.message)
            }
        }

        getAsyncStorageData();
    }, []);

    const handleLogout = async () => {
        await AuthService.userLogout();
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{fontSize: 100}}>Home</Text>
                </View>
                <View>
                    <Text style={{fontSize: 20}}>Name: {currentUserName}</Text>
                    <Text style={{fontSize: 20}}>Email: {currentUserEmail}</Text>
                    <Text style={{fontSize: 20}}>ID: {currentUserId}</Text>
                    <Text style={{fontSize: 20}}>Token: {currentUserToken}</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            handleLogout()
                        }}
                        style={{
                            padding: 15, backgroundColor: '#e90e0e', borderRadius: 10
                        }}>
                        <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

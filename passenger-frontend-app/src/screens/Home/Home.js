
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import AuthService from "../../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {

    const [currentUser, setCurrentUser] = useState();
    const [userRole, setUserRole] = useState();
    const [userFullName, setUserFullName] = useState();

    useEffect(() => {
        // async function dataFetch() {
        //     const data = await AsyncStorage.getItem('user');
        //     // const temp = await AuthService.getCurrentUser();
        //     data != null ? JSON.parse(data) : null;
        //     await setCurrentUser(data.user);
        //     // await setUserFullName(temp.user.name);
        //     console.log("HOME_LOADING: ", JSON.parse(data));
        //     console.log("HOME_LOADING_USER: ", currentUser);
        // }

        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('user')
                const data = jsonValue != null ? JSON.parse(jsonValue) : null;

                await setCurrentUser(data)
            } catch(e) {
                console.log(e.message)
            }
        }

        getData();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Text style={{fontSize: 100}}>Home</Text>
                </View>
                <View>
                    {/*<Text style={{fontSize: 50}}>{JSON.stringify(currentUser, null, 2)}</Text>*/}
                    <Text style={{fontSize: 50}}>{currentUser}</Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;


// import React from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { globalStyles } from '../styles/global';
// import Card from '../shared/card';
//
// export default function ReviewDetails({ navigation }) {
//     return (
//         <View style={globalStyles.container}>
//             <Card>
//                 <Text style={globalStyles.titleText}>
//                     { navigation.getParam('title') }
//                 </Text>
//                 <Text>{ navigation.getParam('body') }</Text>
//                 <Text>{ navigation.getParam('rating') }</Text>
//             </Card>
//         </View>
//     );
// }

import React from "react";
// import {CardView} from "react-native-simple-card-view";
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CardView} from "react-native-simple-card-view";
import { CardViewWithIcon } from 'react-native-simple-card-view'
import {useNavigation} from "@react-navigation/core";

function UserSelection() {

    const navigation = useNavigation();
    return(

        <View style={{backgroundColor: "#22d3ee",width:'100%',height:'100%',alignItems:'center',justifyContent: 'center'}}>
        <Image source={require('../../assets/images/login/ticketsystem.webp')} style={{width: 250, height: 200}}/>
        <CardView onPress={ () => console.log("Clicked!") }>

            {/*<Text*/}
            {/*    style={ {*/}
            {/*        // marginVertical : 15,*/}
            {/*        textAlign      : 'center',*/}
            {/*        backgroundColor: '#673AB7',*/}
            {/*        color          : '#FFFFFF',*/}
            {/*        padding        : 20,*/}
            {/*        // margin:-5,*/}
            {/*        // top:5,*/}
            {/*        alignItems:'center'*/}
            {/*    } }>*/}
            {/*    Local Passenger*/}
            {/*</Text>*/}


            {/*<Text*/}
            {/*    style={ {*/}
            {/*        // marginVertical : 15,*/}
            {/*        textAlign      : 'center',*/}
            {/*        backgroundColor: '#673AB7',*/}
            {/*        color          : '#FFFFFF',*/}
            {/*        padding        : 20,*/}
            {/*        // margin:-5,*/}
            {/*        alignItems:'center',*/}

            {/*    } }>*/}
            {/*   Foreign Passenger*/}
            {/*</Text>*/}

            {/*<Button*/}
            {/*    title=" Local Passenger"*/}
            {/*    color="#f194ff"*/}
            {/*    textAlign = "center"*/}
            {/*backgroundColor= '#673AB7'*/}

            {/*padding        ="20"*/}
            {/*    margin = "10"*/}
            {/*    onPress={() => alert('Button with adjusted color pressed')}*/}
            {/*/>*/}

            <View >
                <TouchableOpacity onPress={() => {
                    navigation.navigate("LocalRegister")
                }} style={styles.defaultButton}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: '#fff',backgroundColor:'#0000FF'}}>Local Passenger</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => {
                    navigation.navigate("ForeignRegister")
                }} style={styles.defaultButton}>
                    <Text style={{textAlign: 'center', fontSize: 16, color: 'fff' ,backgroundColor:'#0000FF'}}>Foreign Passenger</Text>
                </TouchableOpacity>
            </View>





            <View style={styles.formInput}>
                <View style={{height: 1, backgroundColor: '#ddd', width: '100%'}}></View>
            </View>



            {/*<Button*/}
            {/*    title=" Foreign Passenger"*/}
            {/*    color="#f194ff"*/}
            {/*    textAlign = "center"*/}
            {/*    backgroundColor= '#673AB7'*/}

            {/*    padding        ="30"*/}
            {/*    margin = "20"*/}
            {/*    onPress={() => alert('Button with adjusted color pressed')}*/}
            {/*/>*/}
        </CardView>
        </View>


    )

}

export default UserSelection
const styles = StyleSheet.create({

        formInput: {
        marginTop: 10,
        padding: 10,
    },

});



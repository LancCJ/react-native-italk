import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import { FormLabel, FormInput } from 'react-native-elements'

export default class RegisterPage extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.registerform}>
                    <View style={styles.item}><FormLabel>用户名</FormLabel><FormInput/></View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    registerform:{
        flex:1
    },
    item:{
        flexDirection:"row",
        flex:1
    }

});
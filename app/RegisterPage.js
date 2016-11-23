import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

import { FormLabel, FormInput ,Button} from 'react-native-elements'

export default class RegisterPage extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.registerform}>
                <FormLabel>用户名</FormLabel>
                <FormInput/>
                <FormLabel>密  码</FormLabel>
                <FormInput/>
                <FormLabel>手机号</FormLabel>
                <FormInput/>
                <Button
                    buttonStyle={{marginTop:10,height:40}}
                    title='注    册'
                    backgroundColor="#32C739"
                />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:55,
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    registerform:{
        marginTop:20
    }

});
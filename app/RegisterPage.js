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
                    <View style={styles.item}>
                        <FormLabel style={[{flex:1}]}>用户名</FormLabel>
                        <FormInput style={[{flex:4}]}/>
                    </View>
                    <View style={styles.item}>
                        <FormLabel style={[{flex:1}]}>密  码</FormLabel>
                        <FormInput style={[{flex:4}]}/>
                    </View>
                    <View style={styles.item}>
                        <FormLabel style={[{flex:1}]}>手机号</FormLabel>
                        <FormInput style={[{flex:4}]}/>
                    </View>

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
        flex:1,
        margin:2,
        marginTop:30,
        height:200,
        borderWidth:1,
        borderColor:"#FF0000"
    },
    item:{
        flexDirection:"row",
        flex:1
    }

});
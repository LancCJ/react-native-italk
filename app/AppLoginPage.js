/**
 * Created by lanccj on 16/11/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';

import { FormLabel, FormInput ,Button} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

export default class AppLoginPage extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        style={[{width:182,height:51}]}
                        source={require('../images/ITalk.png')}/>
                </View>
                <View style={styles.loginform}>
                    <FormLabel>用户名:</FormLabel>
                    <FormInput
                        style={[styles.textInput,{marginTop:2}]}
                        placeholder='    用户名或手机号或邮箱'
                    />
                    <FormLabel>密  码:</FormLabel>
                    <FormInput
                        style={[styles.textInput,{marginTop:2}]}
                    />
                    <Button
                        buttonStyle={{marginTop:20,height:40}}
                        title='登    录'
                        backgroundColor="#007AFF"
                        onPress={Actions.MainPage}
                    />
                    <Button
                        buttonStyle={{marginTop:10,height:40}}
                        title='注    册'
                        backgroundColor="#32C739"
                        onPress={Actions.RegisterPage}
                    />
                    <View style={[{margin:15,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}]}>
                        <TouchableOpacity onPress={_loginWithProblmes}>
                            <Text style={[{marginLeft:5}]}>登录有问题?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={_loginUsePhone}>
                            <Text>短信验证登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.copyRight}>
                    <Text>Copyright © 2016-, LancCJ, All Rights Reserved</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:55,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        marginTop:30,
        justifyContent:"center",
        alignItems:"center"
    },
    loginform:{
        flex:1,
        marginTop:5,
        height:300,
        width:400
    },
    copyRight:{
        marginBottom:5
    },
    textInput:{
    }
});

const _loginWithProblmes=()=>{
    Alert.alert('跳转到修改密码找回密码界面');
}

const _loginUsePhone=()=>{
    Alert.alert('跳转到使用短信验证登录界面');
}


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

//第三方
import { FormLabel, FormInput ,Button,SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
var Modal = require('react-native-modalbox');
import * as QQAPI from 'react-native-qq';
//自定义
import NetUtil from './common/utils/NetUtil'
import Constant from './common/Constant'
import StateCode from './common/StateCode'


export default class AppLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        };
    }
    _btnOnClickLogin=()=>{
        this.setState({
            isOpen:true
        });
        var params = new Map();
        params.set('userName','lanccj');
        params.set('userPwd','123456');
        // var headers = new Headers();
        // headers.append('Content-Type', 'text/plain');
        // headers.append('Content-Type', 'text/plain');
        NetUtil.post(Constant.UserLoginUrl,params,this.callbackLogin);
    }
    callbackLogin=(response)=>{
        this.setState({
            isOpen:false
        });
        if(StateCode.SUCCESS===response.code){
            //Alert.alert('登录成功，获取到的参数:'+response.data.token);
            Actions.MainPage();
        }else{
            Alert.alert('登录失败，返回错误:'+response.message);
        }
    }
    closeModal=()=>{
        this.setState({isOpen: false});
    }
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
                        value='lanccj'
                    />
                    <FormLabel>密  码:</FormLabel>
                    <FormInput
                        style={[styles.textInput,{marginTop:2}]}
                        secureTextEntry={true}
                        value='123456'
                    />
                    <Button
                        buttonStyle={{marginTop:5,height:40}}
                        title='登    录'
                        backgroundColor="#007AFF"
                        onPress={this._btnOnClickLogin}
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
                    <View style={styles.thirdLogin}>
                        <View style={styles.thirdLoginText}>
                            <Text>--------其他登录方式--------</Text>
                        </View>
                        <View style={[{flexDirection:"row",justifyContent: 'center', alignItems: 'center'}]}>
                            <SocialIcon
                                title='QQ登录'
                                type='qq'
                                onPress={(shareType)=>_onClickThirdLogin('QQ')}
                            />
                            <SocialIcon
                                title='微信登录'
                                type='wechat'
                                onPress={(shareType)=>_onClickThirdLogin('WEIXIN')}
                            />
                            <SocialIcon
                                title='微博登录'
                                type='weibo'
                                onPress={(shareType)=>_onClickThirdLogin('SINA')}
                            />
                        </View>
                    </View>
                    <Text>Copyright © 2016-, LancCJ, All Rights Reserved</Text>
                </View>

                <Modal isOpen={this.state.isOpen} onClosed={this.closeModal} style={[styles.modal]} position={"center"}>
                    <Text style={styles.text}>Modal with backdrop content</Text>
                </Modal>
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
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    loginform:{
        flex:1,
        height:300,
        width:400
    },
    copyRight:{
        marginBottom:5
    },
    textInput:{

    },
    progress: {
        margin: 10,
    },
    modal: {
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{

    },
    btn:{

    },
    thirdLogin:{

    },
    thirdLoginText:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const _loginWithProblmes=()=>{
    Alert.alert('跳转到修改密码找回密码界面');
}

const _loginUsePhone=()=>{
    Alert.alert('跳转到使用短信验证登录界面');
}

const _onClickThirdLogin=(shareType)=>{
    if(shareType==='QQ'){
        QQAPI.login()
            .then((result)=>{
                console.log('QQAPI() result', result)
                //console.log(result.access_token);
            })
            .catch((e)=>{
                console.error(e);
            })
    }else{
        Alert.alert('第三方登录'+shareType);
    }

    Actions.MainPage();
}







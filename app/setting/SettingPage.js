import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert
} from 'react-native';

//第三方组件
import { Button } from 'react-native-elements'
import {Actions} from 'react-native-router-flux'

//自定义
import UserInfo   from './UserInfo';
import Settings   from './Settings';
import ShareAbout from './ShareAbout';

export default class SettingPage extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <UserInfo/>

                <Settings/>

                <ShareAbout/>

                <Button
                    buttonStyle={{marginTop:20,height:40}}
                    title='注销账号'
                    backgroundColor="#007AFF"
                    onPress={clickBtnLogout}
                />
                <Button
                    buttonStyle={{marginTop:10,height:40}}
                    title='注销并退出'
                    color="#FF4917"
                    backgroundColor="#007AFF"
                    onPress={clickBtnLogoutAndExit}
                />
            </ScrollView>
        )
    }
}

const clickBtnLogout = () => {
    //处理些注销操作
    //跳转到登录界面
    Actions.AppLoginPage()
};

const clickBtnLogoutAndExit = () => {
    //处理些注销操作
    //退出程序
};

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#EAEAEA",
    }
});
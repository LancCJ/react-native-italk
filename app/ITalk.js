import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
    StatusBar
} from 'react-native';

//第三方
import {Actions, Scene, Router} from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';
//定义组件
import AboutPage    from './AboutPage';
import ErrorPage    from './ErrorPage';
import AppLoginPage from './AppLoginPage';
import MainPage     from './MainPage';
import RegisterPage from './RegisterPage';
import ChatingRoom  from './chat/ChatingRoom';
import CommonSettingPage  from './setting/common/CommonSettingPage';


const styles = StyleSheet.create({
    navigationBarStyle:{
        backgroundColor:"#0584FE"
    },
    titleStyle:{
        color:"#FFFFFF"
    },
    backTextStyle:{
        marginLeft:5,
        color:"#FFFFFF",
        lineHeight:22
    }
});

//返回按钮的定义
const _renderBackButton=()=>{
    return (
        <TouchableOpacity onPress={Actions.pop}>
            <View style={[{flexDirection:"row"}]}>
                <Ionicons name="ios-arrow-back" size={25} color="#FFFFFF" />
                <Text style={styles.backTextStyle}>返回</Text>
            </View>
        </TouchableOpacity>
    );
}

//APP所有场景定义
const scenes = Actions.create(
    <Scene key="root">
        <Scene
            initial={true}
            key="AppLoginPage"
            component={AppLoginPage}
            title="爱聊ITalk用户登录"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene
            key="RegisterPage"
            renderBackButton={_renderBackButton}
            component={RegisterPage}
            title="爱聊ITalk用户注册"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene

            key="MainPage"
            renderBackButton={_renderBackButton}
            component={MainPage}
            title="爱聊ITalk"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene
            key="ChatingRoom"
            renderBackButton={_renderBackButton}
            component={ChatingRoom}
            title="聊天室"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene
            key="AboutPage"
            renderBackButton={_renderBackButton}
            component={AboutPage}
            title="关于"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene
            key="CommonSettingPage"
            renderBackButton={_renderBackButton}
            component={CommonSettingPage}
            title="通用设置"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene key="ErrorPage" renderBackButton={_renderBackButton} component={ErrorPage}/>
    </Scene>
);

export default class RootITalk extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor="#0584FE"
                    barStyle="light-content"
                />
                <Router
                    scenes={scenes}/>
            </View>
        );
    }
}




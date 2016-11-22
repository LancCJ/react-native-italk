import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//第三方
import {Actions, Scene, Router} from 'react-native-router-flux';
//定义组件
import AppLoginPage from './app/AppLoginPage';
import MainPage from './app/MainPage';
import ChatingRoom from './app/chat/ChatingRoom';



const styles = StyleSheet.create({
    navigationBarStyle:{
        backgroundColor:"#0584FE"
    },
    titleStyle:{
        color:"#FFFFFF"
    }
});

const scenes = Actions.create(
    <Scene key="root">
        <Scene
            key="AppLoginPage"
            component={AppLoginPage}
            title="爱聊ITalk用户登录"
            hideTabBar={true}
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene
            key="MainPage"
            component={MainPage}
            title="爱聊ITalk"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
        <Scene
            key="ChatingRoom"
            component={ChatingRoom}
            title="聊天室"
            navigationBarStyle={styles.navigationBarStyle}
            titleStyle={styles.titleStyle}
        />
    </Scene>
);

export default class ITalk extends Component {
    render() {
        return (
            <Router
                scenes={scenes}/>
        );
    }
}



AppRegistry.registerComponent('ITalk', () => ITalk);

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Alert
} from 'react-native';

//定义组件
import ChatsList from './ChatsList';

/**
 * 登录用户会话主界面
 * */
export default class ChatsPage extends Component {
    render () {
        return (
            <ChatsList/>
        )
    }
}



const styles = StyleSheet.create({

});
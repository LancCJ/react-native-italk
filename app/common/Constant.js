/**
 * Created by lanccj on 16/11/29.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    Platform,
    AsyncStorage
} from 'react-native';

/**
 *静态常量
 */
export default class Constants extends Component {

    //服务器IP地址
    static HostUrl='http://192.168.0.100:8089/api/';
    //各个服务的请求路径
    static UserLoginUrl=Constants.HostUrl+'user/login.json';
}



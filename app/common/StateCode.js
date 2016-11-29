/**
 * Created by lanccj on 16/11/29.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert
} from 'react-native';
/**
 *服务器返回状态码定义
 */
export default class StateCode extends Component {
    //状态码
    static   INTERNAL_ERROR = -1;//内部错误
    static   SUCCESS = 0;//请求成功
    static   ERROR = 1;//响应失败

    //登录状态码
    static   USER_LOGIN_NO_PARAMS = 103;//缺少参数
    static   USER_LOGIN_PARAMS_NO_USERNAME = 104;//缺少用户名
    static   USER_LOGIN_PARAMS_NO_USERPWD = 105;//缺少密码
    static   USER_LOGIN_PARAMS_USERNAMENOTMATCHPWD = 106;//用户密码不匹配
}



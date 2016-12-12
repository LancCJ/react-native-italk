/**
 * Created by lanccj on 16/12/12.
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

import * as ActionTypes from '../actions/ActionTypes';


/**
 *登录
 */
export function login(user){
    console.log('action-LOGIN_ING');
    return (dispatch)=>{
        dispatch({'type':ActionTypes.LOGIN_ING});
    }
}



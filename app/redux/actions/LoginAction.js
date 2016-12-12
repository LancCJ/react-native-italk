/**
 * Created by lanccj on 16/12/12.
 */
import React, {Component} from 'react';

import NetUtil from '../../common/utils/NetUtil';
import Constant from '../../common/Constant';
import StateCode from '../../common/StateCode';
//ActionTpye
import * as ActionTypes from '../actions/ActionTypes';

/**
 *登录
 */
export function login(user){
    console.log('action-LOGIN_ING');
    return (dispatch)=>{
        dispatch({'type':ActionTypes.LOGIN_ING});

        //处理参数
        var params = new Map();
        params.set('userName',user.userName);
        params.set('userPwd',user.userPwd);

        fetch(Constant.UserLoginUrl,{
            method : 'POST',
            body:JSON.stringify(NetUtil.strMapToObj(params))
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                if(StateCode.SUCCESS===responseJSON.code){
                    console.log('action-LOGIN'+responseJSON.data);
                    console.log(responseJSON.data);
                    dispatch({type:ActionTypes.LOGIN,user:responseJSON.data});
                }else{
                    console.log('action-error');
                    dispatch(error());
                }
            }) .done();


    }
}



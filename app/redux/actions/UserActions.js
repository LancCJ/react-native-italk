import * as ActionTypes from './ActionTypes';
import {Alert}from 'react-native';

//自定义
import NetUtil from '../../common/utils/NetUtil'
import Constant from '../../common/Constant'
import StateCode from '../../common/StateCode'


//登陆(登陆操作属于耗时操作，所以需要异步执行，这里采用dispatch分发)
export function login(user){
    return dispatch=>{
        //登陆中,派遣给LOGIN_ING
        dispatch({type:ActionTypes.LOGIN_ING});


        var params = new Map();
        params.set('userName',user.userName);
        params.set('userPwd',user.userPwd);
        // var headers = new Headers();
        // headers.append('Content-Type', 'text/plain');
        // headers.append('Content-Type', 'text/plain');
        NetUtil.post(Constant.UserLoginUrl,params,this.callbackLogin);




        // let result=fetch('http://www.baidu.com')
        //     .then((res)=>{
        //         //延时2s为了模拟效果
        //         setTimeout(()=>{
        //             if(user.userName=='15221850400'&&user.userPwd=='123456'){
        //                 dispatch({type:ActionTypes.LOGIN,user:user});
        //             }else{
        //                 //这里分发的是action
        //                 Alert.alert('用户名或密码错误');
        //                 dispatch(error());
        //             }
        //         },1000);
        //     }).catch((err)=>{
        //         alert(err);
        //         dispatch({type:ActionTypes.LOGIN_ERROR});
        //     })
    }
}

callbackLogin=(response)=>{

    if(StateCode.SUCCESS===response.code){
        //Alert.alert('登录成功，获取到的参数:'+response.data.token);
        //保存信息到系统全局变量 然后保存完毕进行跳转
        // store.userName=response.data.userName;
        // store.reaylName=response.data.reaylName;
        // store.phoneNum=response.data.phoneNum;
        // store.token=response.data.token;
        dispatch({type:ActionTypes.LOGIN,user:user});

    }else{
        dispatch({type:ActionTypes.LOGIN_ERROR});
        //Alert.alert('登录失败，返回错误:'+response.message);
    }
}

function error(){
    return {
        type:ActionTypes.LOGIN_ERROR
    };
}

//登出(由于登出操作一般都只是清空一些数据，不需要异步执行直接返回就可以了，)
export function logout(){
    return {
        type:ActionTypes.LOGOUT,
    };
}
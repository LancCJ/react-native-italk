/**
 * Created by lanccj on 16/12/12.
 */

import * as ActionTypes from '../actions/ActionTypes';

const initialState={
    isLoggedIn:true,//登陆状态
    user:{},//用户登录信息
    status: null//登陆操作状态 ‘done’:已登陆,'doing':正在登陆，null：没有登陆
};

//reducer处理函数更新state,渲染UI(主要根据传入旧的state,)
export default function login(state=initialState,action={}){
    switch(action.type) {
        case ActionTypes.LOGIN:
            return Object.assign({}, state, {
                isLoggedIn:true,
                user:action.user,
                status: 'done'
            });
        case ActionTypes.LOGIN_ING:
            console.log('reducer-LOGIN_ING');
            return Object.assign({}, state, {
                isLoggedIn:false,
                status: 'doing'
            });
        case ActionTypes.LOGIN_ERROR:
            console.log('types.LOGIN_ERROR...');
            return {
                ...state,
                isLoggedIn:false,
                status: 'doing',
            }
            break;
        case ActionTypes.LOGOUT:
            return Object.assign({}, state, {
                isLoggedIn:false,
                status:null
            });
        //切莫忘记default返回值
        default:
            return state;
    }
}
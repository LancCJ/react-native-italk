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
 *Json处理工具类
 */
export default class JsonUtil extends Component {
    /**
     * Map params
     * 传入一个Object对象然后组装成Json字符串返回
     * 举例  登录过程 最后传入Json {userName:lanccj,userPwd:123456}
     * */
    static formatParams(params){
        return JSON.stringify(JsonUitl.strMapToObj(params));
    }


    /**
     *map转化为对象（map所有键都是字符串，可以将其转换为对象）
     */
    static strMapToObj(strMap){
        let obj= Object.create(null);
        for (let[k,v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }
}



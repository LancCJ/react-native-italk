/**
 * Created by lanccj on 16/11/25.
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

//自定义
import ThemeFont    from './ThemeFont';
import ChangePwd    from './ChangePwd';
import NetSetting   from './NetSetting';
import TreeSetting  from './TreeSetting';
import BlackList    from './BlackList';


/**
 * 通用设置
 * */
export default class CommonSettingPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ThemeFont/>
                <ChangePwd/>
                <NetSetting/>
                <TreeSetting/>
                <BlackList/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
});

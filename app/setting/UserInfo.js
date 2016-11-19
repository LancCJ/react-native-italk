import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native';
//第三方组件
import { List, ListItem } from 'react-native-elements'

/***
 * 用户信息
 */

const list = [
    {
        userName: 'bu嗨森~'
    }
]

export default class UserInfo extends Component {
    render () {
        return (
            <List containerStyle={{marginTop:0}}>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.userName}
                            avatar={require('../../images/user/userPic.jpg')}
                            onPress={_onPress}
                        />
                    ))
                }
            </List>
        )
    }
}

const _onPress=()=>{
    Alert.alert('你点击了');
}

const styles = StyleSheet.create({

});
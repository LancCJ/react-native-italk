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
import configureStore from '../redux/store/ConfigureStore';
const store = configureStore();
/***
 * 用户信息
 */

const list = [
    {
        userName: store.userName
    }
]

export default class UserInfo extends Component {
    render () {
        return (
            <List containerStyle={[{marginTop:0},styles.container]}>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.userName}
                            avatar={require('../../images/user/userPic.jpg')}
                            onPress={_onPress}
                            containerStyle={[{height:100}]}
                            avatarStyle={[{height:80,width:80}]}
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
    container:{
    }

});
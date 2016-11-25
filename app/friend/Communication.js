import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert
} from 'react-native';

//第三方组件
import { List, ListItem } from 'react-native-elements'

const list = [
    {
        title: '通讯录',
        icon: 'phone-square',
        color:'#FFA102',
        type:'font-awesome'
    },
    {
        title: '群组',
        icon: 'users',
        color:'#1A7FEE',
        type:'font-awesome'
    },
    {
        title: '订阅号',
        icon: 'check-square',
        color:'#00B0FF',
        type:'font-awesome'
    }
]


/**
 * 通讯录上部分
 * */
export default class Communication extends Component {
    render () {
        return (
            <List containerStyle={{marginTop:0}}>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{name: item.icon,color:item.color,type:item.type}}
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
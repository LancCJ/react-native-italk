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
        title: '新朋友',
        icon: 'md-person-add',
        color:'#F70055',
        type:'ionicon'
    }
]


/**
 * 新朋友
 * */
export default class NewFriends extends Component {
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
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
        title: '分享此应用',
        icon: 'av-timer',
        color:'#FFA102'
    },
    {
        title: '关于',
        icon: 'flight-takeoff',
        color:'#1A7FEE'
    }
]


/**
 *
 * */
export default class ShareAbout extends Component {
    render () {
        return (
            <List containerStyle={{marginTop:20}}>
                {
                    list.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{name: item.icon,color:item.color}}
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
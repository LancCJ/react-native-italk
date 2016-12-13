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
import {Actions} from 'react-native-router-flux'


const list = [
    {
        id:'contacts',
        title: '通讯录',
        icon: 'phone-square',
        color:'#FFA102',
        type:'font-awesome'
    },
    {
        id:'groups',
        title: '群组',
        icon: 'users',
        color:'#1A7FEE',
        type:'font-awesome'
    },
    {
        id:'subscribes',
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
                            onPress={()=>_onPress(item.id)}
                        />
                    ))
                }
            </List>
        )
    }
}

const _onPress = (id) => {
    if(id==='contacts'){
    }else if(id==='groups'){

    }else if(id==='subscribes'){

    }
};

const styles = StyleSheet.create({

});
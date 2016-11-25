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
import Share from 'react-native-share';

const list = [
    {
        id:'Share',
        title: '分享此应用',
        icon: 'share-alt-square',
        color:'#3AC936',
        type:'font-awesome'
    },
    {
        id:"About",
        title: '关于',
        icon: 'info-circle',
        color:'#DE1F00',
        type:'font-awesome'
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
                            leftIcon={{name: item.icon,color:item.color,type:item.type}}
                            onPress={(id)=>_onPress(item.id)}
                        />
                    ))
                }
            </List>
        )
    }
}

let shareOptions = {
    title: "分享 爱聊ITalk",
    message: "快来使用 爱聊ITalk项目开源地址:",
    url: "https://github.com/LancCJ/react-native-italk",
    subject: "Share Link" //  for email
};

const _onPress = (id) => {
    //Alert.alert('点击了'+id);
    if(id==='Share'){
        Share.open(shareOptions);
    }else if(id==='About'){
        Actions.AboutPage();
    }
};

const styles = StyleSheet.create({

});
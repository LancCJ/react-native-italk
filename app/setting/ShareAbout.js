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
        icon: 'av-timer',
        color:'#FFA102'
    },
    {
        id:"About",
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
                            onPress={clickBtnShare}
                            //onPress={_onPress(item.id)}
                        />
                    ))
                }
            </List>
        )
    }
}

let shareOptions = {
    title: "React Native",
    message: "Hola mundo",
    url: "http://facebook.github.io/react-native/",
    subject: "Share Link" //  for email
};

// const _onPress = (id) => {
//     if(id==='Share'){
//         clickBtnShare;
//     }else if(id==='About'){
//         clickBtnAbout;
//     }
// };

const clickBtnShare = () => {
    Share.open(shareOptions);
};

const clickBtnAbout = () => {
    Actions.AboutPage;
};

const styles = StyleSheet.create({

});
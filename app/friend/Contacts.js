/**
 * Created by lanccj on 16/12/13.
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

import { List, ListItem } from 'react-native-elements'


const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
]

/**
 *通讯录 按照分组进行展示
 */
export default class Contacts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <List containerStyle={{marginBottom: 20}}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri:l.avatar_url}}
                                key={i}
                                title={l.name}
                            />
                        ))
                    }
                </List>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#CCCCCC"
    }
});



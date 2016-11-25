import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//第三方组件
import Icon from 'react-native-vector-icons/Ionicons';

//自定义组件
import Communication from './Communication';
import NewFriends from './NewFriends';
import Equipments from './Equipments';
import FriendsList from './FriendsList';




export default class FriendsPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Communication/>
                <NewFriends/>
                <Equipments/>
                <FriendsList/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EAEAEA"
    }
});
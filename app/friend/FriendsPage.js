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
import FriendsList from './FriendsList';
import Communication from './Communication';
import Equipments from './Equipments';




export default class FriendsPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Communication/>
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
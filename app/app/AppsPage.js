import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class AppsPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>暂时无可用应用</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center"
    }
});
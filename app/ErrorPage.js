/**
 * Created by lanccj on 16/11/23.
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

export default class ErrorPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{color: "red"}]}>Error界面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    }
});

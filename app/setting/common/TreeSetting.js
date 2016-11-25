/**
 * Created by lanccj on 16/11/25.
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
/**
 *列表树形或者列表形开关
 */
export default class TreeSetting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{color: "red"}]}>测试界面</Text>
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

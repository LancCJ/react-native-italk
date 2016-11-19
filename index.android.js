import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//自定义组件
import NavigatorPage from './app/NavigatorPage';

export default class ITalk extends Component {
    render() {
        return (
            <NavigatorPage/>
        );
    }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('ITalk', () => ITalk);

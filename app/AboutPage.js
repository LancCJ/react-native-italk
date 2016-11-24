/**
 * Created by lanccj on 16/11/24.
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

export default class AboutPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[{margin:5,flex:1}]}>
                    <View style={styles.logo}>
                        <Image
                            style={[{width:182,height:51}]}
                            source={require('../images/ITalk.png')}/>
                    </View>
                    <View>
                        <Text>
                            版本号:1.0.0_2016.11.24
                        </Text>
                        <Text>
                            这是一款社交聊天工具
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:55,
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    logo:{
        marginTop:20,
        justifyContent:"center",
        alignItems:"center"
    }
});

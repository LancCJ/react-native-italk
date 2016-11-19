import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';

//第三方组件
import Icon from 'react-native-vector-icons/Ionicons';

export default class SettingPage extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.userInfo}>
                    <Image style={styles.userInfoImage}
                        source={require('../../images/user/userPic.jpg')}
                    />
                    <View style={styles.userInfoRight}>
                        <Text style={styles.userInfoText}>bu嗨森~</Text>
                        <Text style={styles.userInfoArrow}><Icon name="ios-arrow-forward" size={30} /></Text>
                    </View>
                </View>

                <View style={styles.settings}>
                    <View style={styles.Item}>
                        <Text style={styles.settingText}><Icon name="ios-settings" color="#FFE4B5" size={30}/>通用</Text>
                        <Text style={styles.userInfoArrow}><Icon name="ios-arrow-forward" size={30} /></Text>
                    </View>
                    <View style={[styles.Item,{borderTopWidth:0,borderBottomWidth:0}]}>
                        <Text style={styles.settingText}><Icon name="ios-settings" color="#00BFFF" size={30}/>消息通知</Text>
                        <Text style={styles.userInfoArrow}><Icon name="ios-arrow-forward" size={30} /></Text>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.settingText}><Icon name="ios-settings" color="#FF8C00" size={30}/>聊天记录</Text>
                        <Text style={styles.userInfoArrow}><Icon name="ios-arrow-forward" size={30} /></Text>
                    </View>
                </View>

                <View style={styles.aboutAndShare}>
                    <View style={styles.Item}>
                        <Text style={styles.settingText}><Icon name="ios-settings" color="#FF8C00" size={30}/>分享此应用</Text>
                        <Text style={styles.userInfoArrow}><Icon name="ios-arrow-forward" size={30} /></Text>
                    </View>
                    <View style={styles.Item}>
                        <Text style={styles.settingText}><Icon name="ios-settings" color="#FF8C00" size={30}/>关于</Text>
                        <Text style={styles.userInfoArrow}><Icon name="ios-arrow-forward" size={30} /></Text>
                    </View>
                </View>

                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={clickBtnLogout}>
                        <Text style={styles.Logout}>注销账号</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn,{marginTop:5}]} onPress={clickBtnLogoutAndExit}>
                        <Text style={styles.LogoutAndExit}>注销并退出</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const clickBtnLogout = () => {
    Alert.alert('你点击了注销按钮');
};

const clickBtnLogoutAndExit = () => {
    Alert.alert('你点击了注销且推出按钮');
};

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#CCCCCC",
    },
    userInfo:{
        flexDirection:"row",
        height:120,
        backgroundColor:"#FFFFFF"
    },
    userInfoImage:{
        margin:10,
        height:100,
        width:100
    },
    userInfoRight:{
        marginTop:10,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    userInfoText:{
        marginLeft:5,
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold"
    },
    userInfoArrow:{
        marginRight:10
    },



    settings:{
        marginTop:20,
        height:120,
        backgroundColor:"#FFFFFF"
    },
    Item:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        height:40,
    },
    settingText:{
        marginLeft:10,
        textAlign:"center"
    },


    aboutAndShare:{
        marginTop:20,
        height:80,
        backgroundColor:"#FFFFFF"
    },

    btns:{
        marginTop:20,
        height:85
    },
    btn:{
        flex:1,
        marginLeft:10,
        marginRight:10,
        backgroundColor:"#23BEFF",
        height:40,
        justifyContent:"center",
        alignItems:"center"
    },
    Logout:{
        color:"#FFFFFF",
        fontSize:15
    },
    LogoutAndExit:{
        color:"#ff291e",
        fontSize:15
    }



});
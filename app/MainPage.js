import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    Image
} from 'react-native';

//第三方组件
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
//定义组件
import ChatsPage from './chat/ChatsPage';
import FriendsPage from './friend/FriendsPage';
import AppsPage from './app/AppsPage';
import SettingPage from './setting/SettingPage';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'chats'
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabNavigator}>
                    <TabNavigator
                        tabBarStyle={{backgroundColor:"#FFFFFF",overflow: 'hidden' }}
                    >
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'chats'}
                            title="会话"
                            renderIcon={() => <Icon name="ios-chatbubbles-outline" size={30} />}
                            renderSelectedIcon={() => <Icon name="ios-chatbubbles"  size={30} color="#007AFF"/>}
                            onPress={() => this.setState({ selectedTab: 'chats' })}>
                            <ChatsPage/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'friends'}
                            title="好友"
                            renderIcon={() => <Icon name="ios-people-outline" size={30} />}
                            renderSelectedIcon={() => <Icon name="ios-people"  size={30} color="#007AFF"/>}
                            onPress={() => this.setState({ selectedTab: 'friends' })}>
                            <FriendsPage/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'apps'}
                            title="应用"
                            renderIcon={() => <Icon name="ios-aperture-outline" size={30} />}
                            renderSelectedIcon={() => <Icon name="ios-aperture" size={30} color="#007AFF"/>}
                            onPress={() => this.setState({ selectedTab: 'apps' })}>
                            <AppsPage/>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'setting'}
                            title="设置"
                            renderIcon={() => <Icon name="ios-settings-outline"  size={30} />}
                            renderSelectedIcon={() => <Icon name="ios-settings"  size={30} color="#007AFF"/>}
                            onPress={() => this.setState({ selectedTab: 'setting' })}>
                            <SettingPage/>
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        marginTop:55,
        backgroundColor:"#CCCCCC",
    },
    toolBar:{
        height:50,
        backgroundColor:"#007AFF"
    },
    tabNavigator:{
        flex:1
    }
});


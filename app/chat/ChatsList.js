import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Alert
} from 'react-native';

//第三方组件
import { List, ListItem } from 'react-native-elements'
//自定义组件
import ChatingRoom from './ChatingRoom';

//创建一个DataSource对象
const ds = new ListView.DataSource({
    //通过判断决定渲染哪些行组件 避免全部渲染 提高渲染效率
    rowHasChanged : (oldRow,newRow) => oldRow!=newRow
});

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Amy Farha',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'http://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
]


/**
 * 登录用户的会话列表
 * */
export default class ChatsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //设置dataSource不使用原始数据
            //使用复制后的数据源 ds.cloneWithRows(list)
            dataSource:ds.cloneWithRows(list)
        };
    }
    // 填出提示框
    onPress() {
        alert("我是Spike!");
    }
    /**
     * 跳转页面至SecondPage
     * @param name 传递参数
     * @param type 动画类型
     */
    gotoNext(name, type = 'Normal') {
        this.props.navigator.push({
            component: ChatingRoom,
            passProps: {
                id: name
            },
            onPress: this.onPress,
            rightText: 'ALERT!',
            type: type
        })
    }
    renderRow (rowData, sectionID) {
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={rowData.name}
                subtitle={rowData.subtitle}
                avatar={{uri:rowData.avatar_url}}
                onPress={()=>this.gotoNext('第一页')}
            />
        )
    }

    render () {
        return (
            <List
                containerStyle={{marginTop:0}}
            >
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.dataSource}
                />
            </List>
        )
    }
}

const _onPress=()=>{
    Alert.alert('你点击了某个会话聊天');
}

const styles = StyleSheet.create({

});
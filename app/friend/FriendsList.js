import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

//第三方组件
import { List, ListItem } from 'react-native-elements'

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
    }
]


/**
 * 我的好友列表
 * */
export default class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //设置dataSource不使用原始数据
            //使用复制后的数据源 ds.cloneWithRows(list)
            dataSource:ds.cloneWithRows(list)
        };
    }
    renderRow (rowData, sectionID) {
        return (
            <ListItem
                roundAvatar
                key={sectionID}
                title={rowData.name}
                subtitle={rowData.subtitle}
                avatar={{uri:rowData.avatar_url}}
            />
        )
    }

    render () {
        return (
            <List>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.dataSource}
                />
            </List>
        )
    }
}

const styles = StyleSheet.create({

});
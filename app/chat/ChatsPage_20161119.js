import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Alert
} from 'react-native';

import chatData from './data.json';

//import NetUitl from '../common/utils/NetUitl';

var chats ;

// NetUtil.get("http://rap.taobao.org/mockjsdata/10312/chat/list",function  (ret) {
//     //回调的结果处理;
//     chats=ret.data
// })
//创建一个DataSource对象
const ds = new ListView.DataSource({
    //通过判断决定渲染哪些行组件 避免全部渲染 提高渲染效率
    rowHasChanged : (oldRow,newRow) => oldRow!=newRow
});

export default class ChatsPage extends Component {
    constructor(props) {

        super(props);
        this.state = {
            //设置dataSource不使用原始数据
            //使用复制后的数据源 ds.cloneWithRows(chats)
            dataSource:[]
        };
    }

    componentDidMount(){
        if(ds.getRowCount()<=0){
            //Alert.alert("初始化数据...");
            //_fetchData();
            //var json=Mock.mock(_fetchData());
            //Alert.alert(json.code);
            //Alert.alert("数据源"+chats);
            chats = chatData.movies;

            this.setState(
                {
                    dataSource :ds.cloneWithRows(chats)
                }
            );
            //Alert.alert("获取数据数量"+chats.length());
        }
    }

    render() {
        if(chats!=null){
            return (
                <ListView style={styles.listView}
                          dataSource={this.state.dataSource}
                          renderRow={__renderRow}
                          renderSeparator={__renderSeparator}
                          initialListSize={10}
                />
            )
        }else{
            return (
                <View style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"#FFFFFF"}}
                      >
                    <Text>会话列表加载中....</Text>
                </View>
                )
        }
    }
}

const _fetchData=()=>{
    return fetch('http://rap.taobao.org/mockjsdata/10312/chat/list')
        .then((response) => response.json())
        .then((response) => {

           // var resJson=Mock.mock(response);

            console.log(response);
        })
        .catch((error) => {
            console.error(error);
        });
}

const __renderSeparator = (sectionID,rowID) => {
    return (
        <View style={styles.separator} key={sectionID+rowID}></View>
    );
}

const __renderRow = (chat) => {
    return (
        <View style={styles.row}>
            <Image style={styles.thumbnail}
                   source={{uri:chat.posters.thumbnail}}
            ></Image>
            <View style={[styles.rightContainer]}>
                <View style={[{flexDirection:"row",flex:1,justifyContent:"space-between",alignItems:"center"}]}>
                    <Text style={styles.title} numberOfLines={1} >{chat.title}</Text>
                    <Text style={styles.title}>{chat.year}</Text>
                </View>
                <View style={[{flexDirection:"row",flex:1,justifyContent:"flex-start",alignItems:"center"}]}>
                    <Text style={[styles.title]} numberOfLines={1}>{chat.title}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listView:{
        flex:1,
        backgroundColor:"#FFFFFF"
    },
    row:{
        flexDirection:"row",
        padding:5,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FFFFFF"
    },
    thumbnail:{
        width:53,
        height:53,
        backgroundColor:"gray"
    },
    rightContainer:{
        marginLeft:10,
        flex:1
    },
    title:{
        fontSize:18,
        marginTop:3,
        marginBottom:3,
        textAlign:"center"
    },
    year:{
        marginBottom:3,
        textAlign:"center"
    },
    header:{
        height:44,
        backgroundColor:"#FFFFFF",
    },
    header_text:{
        flex:1,
        fontSize:20,
        fontWeight:"bold",
        lineHeight:44,
        textAlign:"center"
    },
    separator:{
        height:1,
        backgroundColor:"#CCCCCC"
    }
});
/**
 * Created by lanccj on 16/11/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native';

//第三方
import { FormLabel, FormInput ,Button,SocialIcon} from 'react-native-elements'
import {Actions} from 'react-native-router-flux'
var Modal = require('react-native-modalbox');
import * as QQAPI from 'react-native-qq';
import {connect} from 'react-redux';//将我们的页面和action链接起来
import {bindActionCreators} from 'redux';//将要绑定的actions和dispatch绑定到一起
import * as actionCreators from './redux/actions/UserActions';//导入需要绑定的actions


class AppLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state={
        }

        this.login=this.login.bind(this);
        this.onChangeUserName=this.onChangeUserName.bind(this);
        this.onChangePswd=this.onChangePswd.bind(this);
    }





    onChangeUserName(text){
        this.setState({'userName':text});
    }

    onChangePswd(text){
        this.setState({'userPwd':text});
    }

    login(){

        if(!this.state.userName||!this.state.userPwd){
            Alert.alert('用户名或密码不能为空！');
        }else{
            this.refs.modal.open();//loading 状态
            this.props.actions.login({'userName':this.state.userName,'userPwd':this.state.userPwd});//dispath 登陆
        }
    }

    //该方法首次不会执行，如果返回false，则reduer不会执行，，
    shouldComponentUpdate(nextProps,nextState){
        const {isLoggedIn}=nextProps;
        if(isLoggedIn){
            this.setState({userName:'',userPwd:''});

            Actions.MainPage();

        }
        return true;
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        style={[{width:182,height:51}]}
                        source={require('../images/ITalk.png')}/>
                </View>
                <View style={styles.loginform}>
                    <FormLabel>用户名:</FormLabel>
                    <FormInput
                        style={[styles.textInput,{marginTop:2}]}
                        placeholder='    用户名或手机号或邮箱'
                        //value='lanccj'
                        onChangeText={this.onChangeUserName}
                    />
                    <FormLabel>密  码:</FormLabel>
                    <FormInput
                        style={[styles.textInput,{marginTop:2}]}
                        secureTextEntry={true}
                        //value='123456'
                        onChangeText={this.onChangePswd}
                    />
                    <Button
                        buttonStyle={{marginTop:5,height:40}}
                        title='登    录'
                        backgroundColor="#007AFF"
                        onPress={this.login}
                    />
                    <Button
                        buttonStyle={{marginTop:10,height:40}}
                        title='注    册'
                        backgroundColor="#32C739"
                        onPress={Actions.RegisterPage}
                    />
                    <View style={[{margin:15,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}]}>
                        <TouchableOpacity onPress={_loginWithProblmes}>
                            <Text style={[{marginLeft:5}]}>登录有问题?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={_loginUsePhone}>
                            <Text>短信验证登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.copyRight}>
                    <View style={styles.thirdLogin}>
                        <View style={styles.thirdLoginText}>
                            <Text>--------其他登录方式--------</Text>
                        </View>
                        <View style={[{flexDirection:"row",justifyContent: 'center', alignItems: 'center'}]}>
                            <SocialIcon
                                title='QQ登录'
                                type='qq'
                                onPress={(shareType)=>_onClickThirdLogin('QQ')}
                                style={{ backgroundColor:"#FF0000"}}
                            />
                            <SocialIcon
                                title='微信登录'
                                type='wechat'
                                onPress={(shareType)=>_onClickThirdLogin('WEIXIN')}
                                style={{ backgroundColor:"#32C739"}}
                            />
                            <SocialIcon
                                title='微博登录'
                                type='weibo'
                                onPress={(shareType)=>_onClickThirdLogin('SINA')}
                                style={{ backgroundColor:"#EA7A00"}}
                            />
                        </View>
                    </View>
                    <Text>Copyright © 2016-, LancCJ, All Rights Reserved</Text>
                </View>

                <Modal animationduration="{0}" isopen="{this.props.status=='doing'?true:false}" position={"center"} ref='modal' style={styles.modal}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:55,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    loginform:{
        flex:1,
        height:300,
        width:400
    },
    copyRight:{
        marginBottom:5
    },
    textInput:{

    },
    progress: {
        margin: 10,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:150,
        borderRadius:10,
    },
    text:{

    },
    btn:{

    },
    thirdLogin:{

    },
    thirdLoginText:{
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const _loginWithProblmes=()=>{
    Alert.alert('跳转到修改密码找回密码界面');
}

const _loginUsePhone=()=>{
    Alert.alert('跳转到使用短信验证登录界面');
}

const _onClickThirdLogin=(shareType)=>{
    if(shareType==='QQ'){
        QQAPI.login()
            .then((result)=>{
                console.log(result.access_token);
                //console.log('QQAPI() result', result)
                //Alert.alert('第三方登录'+result.access_token);
            })
            .catch((e)=>{
                console.error(e);
            })
    }if(shareType==='WEIXIN'){
        Alert.alert('微信登录要付费不做了');
    }else{
        Alert.alert('微博第三方登录');
    }


}

//根据全局state返回当前页面所需要的信息,（注意以props的形式传递给AppLoginPage）
function mapStateToProps(state){
    return{
        isLoggedIn:state.isLoggedIn,
        status:state.status,
    };
}
//返回可以操作store.state的actions,(其实就是我们可以通过actions来调用我们绑定好的一系列方法)
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

//链接起来
export default  connect(mapStateToProps,mapDispatchToProps)(AppLoginPage);







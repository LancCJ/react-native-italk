import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//第三方组件
import { GiftedChat } from 'react-native-gifted-chat';

/**
 * 聊天室
 * */
export default class ChatingRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {messages: [
            {
                _id: 1,
                text: 'My message',
                createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://facebook.github.io/react/img/logo_og.png',
                },
                image: 'https://facebook.github.io/react/img/logo_og.png',
            }
        ]};
        this.onSend = this.onSend.bind(this);
    }
    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }
    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

const styles = StyleSheet.create({

});
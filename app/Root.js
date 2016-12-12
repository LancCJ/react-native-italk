import React, { Component } from 'react';
import {Provider} from 'react-redux';
import ITalk from './ITalk';
import configureStore from './redux/store/ConfigureStore';
const store=configureStore();//获取store

export default class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <ITalk/>
            </Provider>
        );
    }
}
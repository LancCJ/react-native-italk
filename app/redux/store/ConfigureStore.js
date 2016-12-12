import reducers from '../reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';//引入异步操作
//引入所有的reducers,切记要在index.js封装下.
const middlewares = [thunk];

const createSoreWithMiddleware=applyMiddleware(...middlewares)(createStore);

//配置store信息
export default function configureStore(initialState){
    //创建store
    const store=createSoreWithMiddleware(reducers,initialState);

    return store;
}
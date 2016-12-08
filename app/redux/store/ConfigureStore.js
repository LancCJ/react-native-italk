/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import thunk from 'redux-thunk';//引入异步操作
import rootReducer from '../reducers/index';
const middlewares = [thunk];
const createLogger = require('redux-logger');

// configuring saga middleware
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function ConfigureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    // install saga run
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);

    return store;
}

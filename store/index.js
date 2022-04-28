import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootSaga from './sagas';
import { combinedReducers } from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(
    combinedReducers, {},
    applyMiddleware(thunk, logger),
);


export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

export const allReucers = combineReducers({});

export const middleware = applyMiddleware(promise(), logger);

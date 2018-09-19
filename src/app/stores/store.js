import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import promice from 'redux-promise-middleware';

//redusers

import { usersReducer } from '../reducers/UserReducers';
import { usersActiveReduser } from '../reducers/UserActiveRedusers';

const redusers = combineReducers({
	users: usersReducer,
	user: usersActiveReduser,
});

const logger = createLogger({
	duration: true,
});
const initialState = {};

const middleware = applyMiddleware(promice(), logger);

const store = createStore(redusers, initialState, middleware);

export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';

//redusers

import { usersReducer } from '../reducers/UsersReducers';
import { userReducer } from '../reducers/UserRedusers';

const redusers = combineReducers({
	users: usersReducer,
	user: userReducer,
});

const logger = createLogger({
	duration: true,
});
const initialState = {};

const middleware = applyMiddleware(promise(), logger);

const store = createStore(redusers, initialState, middleware);

export default store;

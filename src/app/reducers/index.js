import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import BlogRedusers from './BlogRedusers';
import UserActive from './UserActiveRedusers';
import UserReducers from './UserReducers';

export const allReucers = combineReducers({
	users: UserReducers,
	active: UserActive,
	posts: BlogRedusers,
});

export const middleware = applyMiddleware(promise(), logger);

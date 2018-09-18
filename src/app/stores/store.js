import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import promice from 'redux-promise-middleware';

//redusers

import { usersReduser } from '../reducers/UserReducers';
import { usersActiveReduser } from '../reducers/UserActiveRedusers';

const redusers = combineReducers({
	users: usersReduser,
	user: usersActiveReduser,
});
const midleweare = applyMiddleware(promice(), logger());

const store = createStore(redusers, midleweare);

export default store;

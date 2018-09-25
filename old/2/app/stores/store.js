import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { usersReducer } from '../reducers/usersReducer';
import { commentsReducer } from '../reducers/commentsReducer';
import { postsReducer } from '../reducers/postsReducer';

const reducers = combineReducers({
	users: usersReducer,
	comments: commentsReducer,
	posts: postsReducer,
});

const middleware = applyMiddleware(promise(), logger());

const store = createStore(reducers, middleware);
export default store;

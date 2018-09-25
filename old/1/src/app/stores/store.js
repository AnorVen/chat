import { createStore, combineReducers, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

//Reducers
import { postsReducer } from '../reducers/postsReducer';
import { blogsReducer } from '../reducers/blogsReducer';
import { singleBlogReducer } from '../reducers/singleBlogsReducer';
import { singlePostReducer } from '../reducers/singlePostReducer';
import { commentsReducer } from '../reducers/commentsReducer';

const reducers = combineReducers({
	posts: postsReducer,
	blogs: blogsReducer,
	blog: singleBlogReducer,
	post: singlePostReducer,
	comments: commentsReducer,
});

const middleware = applyMiddleware(promise(), logger());

const store = createStore(reducers, middleware);
export default store;

import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../stores/store';

import App from '../layouts/App';
import Main from '../pages/Main';
import Blogs from '../pages/Blogs';
import SinglePost from '../pages/SinglePost';
import Comments from '../pages/Comments';
import Users from '../pages/Users';
import SingleUser from '../pages/SingleUser';
import Error404 from '../pages/error/Error404';
import SingleBlock from '../pages/SingleBlog';

module.exports = function(idRoot) {
	ReactDom.render(
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Main} />
					<Route path="blog" component={Blogs} />
					<Route path="blog/:idBlog" component={SingleBlock} />
					<Route path="blog/post/:idPost" component={SinglePost} />
					<Route path="comments" component={Comments} />
					<Route path="users" component={Users} />
					<Route path="users/show/:idUser" component={SingleUser} />
					<Route path="*" component={Error404} />
				</Route>
			</Router>
		</Provider>,
		document.querySelector(idRoot)
	);
};

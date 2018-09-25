import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './stores/store';

import Layout from './layouts/Layout';
import Portfolio from './pages/Portfolio';
import PortfolioExample from './pages/PortfolioExample';
import Blog from './pages/Blog';
import Post from './pages/Post';
import User from './pages/User';
import Users from './pages/Users';
import Contacts from './pages/Contacts';

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Portfolio} />
				<Route path="portfolio/:portfolioId" component={PortfolioExample} />
				<Route path="blog" component={Blog} />
				<Route path="blog/:postId" component={Post} />
				<Route path="users" component={Users} />
				<Route path="users/:userId" component={User} />
				<Route path="Contacts" component={Contacts} />
			</Route>
		</Router>
	</Provider>,
	root
);

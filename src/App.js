import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { allReucers, middleware } from './app/reducers/index';
import { Provider } from 'react-redux';

import Layout from './app/layouts/Layout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Blog from './app/pages/Blog';
import BlogItem from './app/pages/BlogItem';
import Comments from './app/pages/Comments';
import Comment from './app/pages/Comment';
import ToDo from './app/pages/ToDo';
import KanbanBoard from './app/components/kanban/KanbanBoard';

import './app/styles/bootstrap/css/bootstrap.css';
import './app/styles/bootstrap/css/bootstrap-theme.css';

import './App.css';

const store = createStore(allReucers, middleware);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Layout>
						<Switch>
							<Route exact path="/" component={Main} />
							<Route exact path="/users" component={Users} />
							<Route path="/users/:userId" component={User} />
							<Route exact path="/blog" component={Blog} />
							<Route path="/blog/:id" component={BlogItem} />
							<Route exact path="/comments" component={Comments} />
							<Route path="/comments/:id" component={Comment} />
							<Route exact path="/kanban" component={KanbanBoard} />
							<Route exact path="/todo" component={ToDo} />
							<Route path="*" component={PageNotFound} />
						</Switch>
					</Layout>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;

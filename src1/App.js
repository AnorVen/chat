import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
} from 'react-router-dom';
import news from './components/news';
import profile from './components/profile';
import login from './components/login';
import main from './components/main';
import PrivateRoute from './components/PrivateRoute';
import { Provider } from 'react-redux';
import { allReucers, middleware } from './redusers/index';
import { createStore } from 'redux';

const store = createStore(allReucers, middleware);

const App = () => (
	<Provider store={store}>
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">главная</Link>
					</li>
					<li>
						<Link to="/news">новости</Link>
					</li>
					<li>
						<Link to="/login">профиль</Link>
					</li>
				</ul>

				<hr />

				<Route exact path="/" component={main} />
				<Route path="/news" component={news} />
				<Route path="/login" component={login} />
				<PrivateRoute path="/profile" component={profile} />
			</div>
		</Router>
	</Provider>
);

export default App;

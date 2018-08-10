import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import news from './components/news';
import profile from './components/profile';
import login from './components/login';
import main from './components/main';

class App extends Component {
	render() {
		return (
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
							<Link to="/profile">профиль</Link>
						</li>
					</ul>

					<Route exact path="/" component={main} />
					<Route path="/news" component={news} />
					<Route path="/profile" component={profile} />
				</div>
			</Router>
		);
	}
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Blog/Header/Header';
import Menu from '../components/Blog/Header/Menu';
import MenuItem from '../components/Blog/Header/MenuItem';
import Footer from '../components/Blog/Footer/Footer';
import Comments from '../pages/Comments';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.brand = 'React User Blog';
	}

	mainMenu = [
		{
			menuhref: '/',
			menutitle: 'Главная',
		},
		{
			menuhref: '/users',
			menutitle: 'Пользователи',
		},
		{
			menuhref: '/blog',
			menutitle: 'Blog',
		},
		{
			menuhref: '/comments',
			menutitle: 'Comments',
		},
		{
			menuhref: '/kanban',
			menutitle: 'KanbanBoard',
		},
		{
			menuhref: '/todo',
			menutitle: 'ToDo',
		},
	];

	render() {
		return (
			<div>
				<Header brand={this.brand}>
					<Menu menuItems={this.mainMenu} />
				</Header>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							{this.props.children}
							<hr />
							<Link to="/errorpage">Перейти на страницу с ошибкой</Link>
						</div>
					</div>
				</div>
				<Footer>&copy; 2018</Footer>
			</div>
		);
	}
}

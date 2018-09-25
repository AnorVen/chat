import React from 'react';
import { Link } from 'react-router';

export default class MainMenu extends React.Component {
	constructor(props) {
		super(props);
		this.menuItems = [
			{ link: '', text: 'Home' },
			{ link: 'blog', text: 'Blogs' },
			{ link: 'comments', text: 'Comments' },
			{ link: 'users', text: 'Users' },
		];
	}

	static isActive(href) {
		return window.location.pathname.split('/')[1] === href;
	}

	render() {
		let items = this.menuItems.map((item, index) => (
			<li
				className={MainMenu.isActive(item.link) ? 'active' : ''}
				role="presentation"
				key={index}
			>
				<Link to={'/' + item.link}>{item.text}</Link>
			</li>
		));
		return (
			<nav>
				<ul className="nav nav-pills pull-right">{items}</ul>
			</nav>
		);
	}
}

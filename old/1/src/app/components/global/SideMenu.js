import React from 'react';
import { Link } from 'react-router';

export default class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		this.menuItems = [
			{ link: '/', text: 'Home' },
			{ link: 'blog', text: 'Blog' },
			{ link: 'comments', text: 'Comments' },
			{ link: 'users', text: 'Users' },
		];
	}

	render() {
		let items = this.menuItems.map((item, index) => (
			<Link key={index} className="list-group-item" to={'/' + item.link}>
				{item.text}
			</Link>
		));
		return <div className="list-group">{items}</div>;
	}
}

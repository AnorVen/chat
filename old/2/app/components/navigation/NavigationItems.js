import React from 'react';
import { Link } from 'react-router';

export default class NavigationItems extends React.Component {
	isActive(href) {
		return window.location.pathname === href;
	}

	render() {
		return (
			<Link
				to={this.props.link}
				className={
					this.isActive(this.props.link)
						? 'mdl-navigation__link is-active'
						: 'mdl-navigation__link'
				}
			>
				{this.props.title}
			</Link>
		);
	}
}

import React from 'react';
import { Link } from 'react-router';

export default class UsersList extends React.Component {
	render() {
		return (
			<li className="mdl-list__item">
				<span className="mdl-list__item-primary-content">
					<i className="material-icons mdl-list__item-icon">person</i>
					<Link to={'/users/' + this.props.id}>{this.props.name}</Link>
				</span>
			</li>
		);
	}
}

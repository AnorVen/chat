import React from 'react';
import UserAdminOptions from './UserAdminOptions';

export default class UserItem extends React.Component {
	constructor(props) {
		super(props);
		this.userRole = 'admin';
	}

	render() {
		return (
			<div className="thumbnail">
				<div className="caption">
					<h3>Login: {this.props.user.username}</h3>
					<p>Full name: {this.props.user.name}</p>
					<div>
						<a href="#" className="btn btn-primary" role="button">
							Profile
						</a>

						<UserAdminOptions user={this.props.user} userRole={this.userRole} />
					</div>
				</div>
			</div>
		);
	}
}

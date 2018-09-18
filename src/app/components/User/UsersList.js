import React, { Component } from 'react';
import User from './User';
import UserDetails from './UserDetails';

export default class UsersList extends Component {
	render() {
		if (!this.props.users.length) {
			return <div>user - 0;</div>;
		}

		let users = this.props.users.map((user, index) => {
			return (
				<User onClick={() => this.props.select(user)} key={index} {...user} />
			);
		});

		return (
			<div>
				<div>
					<UserDetails />
				</div>
				<h1>Пользователи</h1>
				{users}
			</div>
		);
	}
}

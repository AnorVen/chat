import React, { Component } from 'react';
import User from './User';
/*	<User onClick={() => this.props.select(user)} key={index} {...user} />*/
export default class UsersList extends Component {
	render() {
		if (!this.props.users.length) {
			return <div>user - 0;</div>;
		}

		let users = this.props.users.map((user, index) => {
			return <User key={index} {...user} />;
		});

		return (
			<div>
				<h1>Пользователи</h1>
				{users}
			</div>
		);
	}
}

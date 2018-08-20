import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class login extends Component {
	constructor() {
		super();
		const user = {
			username: 'Admin',
			password: '12345',
		};
	}

	auth = () =>
		this.user.password === this.password.current.value &&
		this.user.username === this.username.current.value
			? localStorage.setItem('isAuth', 'true')
			: alert(1);

	render() {
		return (
			<div>
				<label htmlFor="">
					{' '}
					login
					<input type="text" ref="username" />
				</label>{' '}
				<br />
				<label htmlFor="">
					{' '}
					pass
					<input type="text" ref="password" />
				</label>
				<br />
				<button onClick={this.auth}>auth</button>
				<br />
				<Link to="/">главная</Link>
			</div>
		);
	}
}

export default login;

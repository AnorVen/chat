import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToReferrer: false,
		};
	}

	user = node => (this._user = node);
	pass = node => (this._pass = node);

	auth = () =>
		this._user.value === 'Admin' && this._pass.value === '12345'
			? this.setState({
					redirectToReferrer: true,
			  })
			: console.log(this.state.redirectToReferrer);

	render() {
		if (this.state.redirectToReferrer) {
			return <Redirect to="/profile" />;
		}

		return (
			<div>
				<label htmlFor="">
					{' '}
					login
					<input type="text" ref={this.user} />
				</label>{' '}
				<br />
				<label htmlFor="">
					{' '}
					pass
					<input type="text" ref={this.pass} />
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

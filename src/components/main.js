import React, { Component } from 'react';

class main extends Component {
	logout = () => localStorage.removeItem('isAuth');

	render() {
		return (
			<div>
				<p>Главная</p>
				<button onClick={this.logout}>AuthOUT</button>
			</div>
		);
	}
}

export default main;

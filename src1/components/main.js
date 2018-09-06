import React, { Component } from 'react';

class main extends Component {
	logout = () => localStorage.removeItem('isAuth');

	render() {
		const Auth = () => {
			localStorage.getitem('isAuth')
				? `<button onClick={this.logout}>AuthOUT</button>`
				: null;
		};
		return (
			<div>
				<p>Главная</p>
				{Auth}
			</div>
		);
	}
}

export default main;

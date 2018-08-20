import React, { Component } from 'react';

class main extends Component {
	render() {
		return (
			<div>
				<p>Главная</p>
				<button onClick={localStorage.removeItem('isAuth')}>AuthOUT</button>
			</div>
		);
	}
}

export default main;

import React, { Component } from 'react';

class FIO extends Component {
	constructor(props) {
		super(props);
	}
	Alert() {
		alert(this.props.firstName);
	}
	DateWatch() {
		alert(new Date().toLocaleDateString());
	}

	render() {
		return (
			<p className={'fio'}>
				Фио разработчика:
				<br />
				<span onClick={this.Alert.bind(this)}>
					Имя: {this.props.firstName}
				</span>{' '}
				<br />
				Фамилия: {this.props.lastName}
				<button onClick={this.DateWatch}>дата</button>
			</p>
		);
	}
}

export default FIO;

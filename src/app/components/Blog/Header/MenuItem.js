import React from 'react';
import { Link } from 'react-router-dom';

export default class MenuItem extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li className={this.props.isActive(this.props.menuhref)}>
				{this.props.children}
			</li>
		);
	}
}

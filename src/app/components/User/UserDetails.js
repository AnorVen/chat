import React from 'react';
import { Link } from 'react-router-dom';

class UserDetails extends React.Component {
	render() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">{this.props.username}</h3>
				</div>
				<div className="panel-body" onClick={this.props.onClick}>
					<p>{this.props.name}</p>
					<p>{this.props.email}</p>
					<p>{this.props.phone}</p>
					<p>{this.props.website}</p>
				</div>
			</div>
		);
	}
}

export default UserDetails;

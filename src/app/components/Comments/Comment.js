import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends Component {
	render() {
		return (
			<div>
				<h3 className="panel-title">
					<Link to={`/comments/${this.props.id}`}>{this.props.id}</Link>
				</h3>
				<h3>{this.props.title}</h3>
				<p>{this.props.body}</p>
			</div>
		);
	}
}

import React, { Component } from 'react';
import CommentText from './Comment';

export default class CommentsList extends Component {
	render() {
		let comment = this.props.comments.map((comment, index) => {
			return <CommentText key={index} {...comment} />;
		});

		return <div>{!this.props.children ? comment : this.props.children}</div>;
	}
}

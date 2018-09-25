import React from 'react';

export default class CommentItem extends React.Component {
	render() {
		return (
			<div className="well well-sm">
				<h4>{this.props.comment.email}:</h4>
				{this.props.comment.body}
			</div>
		);
	}
}

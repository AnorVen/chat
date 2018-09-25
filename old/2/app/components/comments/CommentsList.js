import React from 'react';

import CommentsItem from './CommentsItem';

export default class CommentsList extends React.Component {
	comments(id) {
		let comments = [];
		for (let i = 0; i < this.props.comments.length; i++) {
			if (id === this.props.comments[i].postId) {
				comments.push(this.props.comments[i]);
			}
		}
		return comments;
	}

	render() {
		let comments = this.comments(+this.props.postId).map((comment, index) => {
			return (
				<CommentsItem
					id={comment.id}
					postId={comment.postId}
					name={comment.name}
					email={comment.email}
					body={comment.body}
					key={index}
				/>
			);
		});

		return (
			<div className="mdl-grid mdl-cell mdl-cell--12-col mdl-cell--4-col-tablet mdl-card mdl-shadow--4dp">
				{this.props.is_fetching ? 'Идет загрузка данных...' : comments}
			</div>
		);
	}
}

import React from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/commentsActions';

import CommentsList from './CommentsList';

class CommentsMain extends React.Component {
	constructor() {
		super(...arguments);

		let comments = fetchComments();
		this.props.dispatch(comments);
	}

	render() {
		return (
			<div className="mdl-grid portfolio-max-width">
				<CommentsList
					comments={this.props.comments}
					postId={this.props.postId}
				/>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		comments: store.comments.comments,
		is_fetching: store.comments.is_fetching,
	};
}

export default connect(mapStateToProps)(CommentsMain);

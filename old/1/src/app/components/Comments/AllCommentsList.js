import React from 'react';
import { connect } from 'react-redux';
import CommentItem from './CommentItem';
import { fetchAllComments } from '../../actions/commentsActions';
import LoadingAnimation from '../global/LoadingAnimation';

class AllCommentsList extends React.Component {
	constructor(props) {
		super(props);

		this.props.dispatch(fetchAllComments());
	}

	render() {
		if (this.props.is_fetching) return <LoadingAnimation />;

		let comments = this.props.comments.map((comment, index) => (
			<CommentItem key={index} comment={comment} />
		));

		return <div>{comments}</div>;
	}
}

function mapStateToProps(store) {
	return {
		comments: store.comments.comments,
		is_fetching: store.comments.is_fetching,
	};
}

export default connect(mapStateToProps)(AllCommentsList);

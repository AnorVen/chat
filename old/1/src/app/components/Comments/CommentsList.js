import React from 'react';
import { connect } from 'react-redux';
import CommentItem from './CommentItem';
import { fetchCommentsByPostId } from '../../actions/commentsActions';
import LoadingAnimation from '../global/LoadingAnimation';

class CommentsList extends React.Component {
	constructor(props) {
		super(props);

		this.state = { isOpenComments: false };

		this.props.dispatch(fetchCommentsByPostId(this.props.idPost));
	}

	toggleComments = () => {
		this.setState({ isOpenComments: !this.state.isOpenComments });
	};

	render() {
		if (this.props.is_fetching) return <LoadingAnimation />;

		let comments = this.props.comments.map((comment, index) => (
			<CommentItem key={index} comment={comment} />
		));

		return (
			<div>
				<a
					className="btn btn-success"
					style={{ width: 100 + '%', display: 'block' }}
					onClick={this.toggleComments}
				>
					{this.state.isOpenComments ? 'Hide' : 'View comments'}
				</a>
				{this.state.isOpenComments ? comments : null}
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

export default connect(mapStateToProps)(CommentsList);

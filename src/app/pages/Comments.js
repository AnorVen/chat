import React, { Component } from 'react';
import CommentsStore from '../stores/CommentsStore';
import { addComment, fetchComments } from '../actions/CommentsActions';
import CommentsList from '../components/Comments/CommentsList';

export default class Comments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comments: [],
		};

		this.onComentChenge = this.onComentChenge.bind(this);
	}

	newComment = () => {
		let body = 'new coment';
		let userId = 1;
		let title = 'new titleComment';
		addComment(title, userId, body);
	};

	onComentChenge(comments) {
		this.setState({
			comments: comments,
		});
	}

	componentWillMount() {
		CommentsStore.on('change', this.onComentChenge);
	}

	componentDidMount() {
		fetchComments();
	}

	componentWillUnmount() {
		CommentsStore.removeListener('change', this.onComentChenge);
	}

	render() {
		return (
			<div>
				<button className="btn btn-primary btn-block" onClick={this.newComment}>
					New Comment
				</button>
				{!this.props.children ? (
					<CommentsList comments={this.state.comments} />
				) : (
					this.props.children
				)}
			</div>
		);
	}
}

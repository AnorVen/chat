import React from 'react';
import CommentText from '../components/Comments/Comment';
import CommentsStore from '../stores/CommentsStore';
import { fetchComments } from '../actions/CommentsActions';

// с трудом заставил эту штуковину работать, но как получить нужные параметры из стора - непонимаю
export default class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: null,
		};
	}

	onComentChenge = comment => {
		this.setState({
			comment: comment,
		});
	};
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
			<div>{this.state.comment && <CommentText {...this.state.comment} />}</div>
		);
	}
}

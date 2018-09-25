import React from 'react';
import axios from 'axios';

import PostAuthorName from './PostAuthorName';
import CommentsMain from '../comments/CommentsMain';

export default class PostMain extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			post: [],
		};

		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${this.props.postId}`)
			.then(response => {
				this.setState({
					post: response.data,
				});
			});
	}

	render() {
		return (
			<div className="mdl-grid portfolio-max-width">
				<div className="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
					<div className="mdl-card__title">
						<h2 className="mdl-card__title-text">{this.state.post['title']}</h2>
					</div>
					<div className="mdl-card__supporting-text">
						<strong>Author </strong>
						<span>
							<PostAuthorName userId={this.state.post['userId']} />
						</span>
					</div>
					<div className="mdl-grid portfolio-copy">
						<div className="mdl-cell mdl-cell--12-col mdl-card__supporting-text no-padding">
							<p>{this.state.post['body']}</p>
						</div>
					</div>
				</div>
				<CommentsMain postId={this.props.postId} />
			</div>
		);
	}
}

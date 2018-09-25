import React from 'react';
import CommentsList from '../components/Comments/AllCommentsList';

export default class Comments extends React.Component {
	render() {
		return (
			<main className="col-lg-8 left-col">
				<div className="panel">
					<CommentsList />
				</div>
			</main>
		);
	}
}

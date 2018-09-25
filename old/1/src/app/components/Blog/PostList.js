import React from 'react';
import PostItem from './PostItem';

export default class PostList extends React.Component {
	render() {
		let posts = this.props.posts.map((post, index) => (
			<PostItem post={post} key={index} />
		));

		return (
			<div className="panel panel-primary">
				<div className="panel-heading">Posts</div>
				<div className="panel-body">{posts}</div>
			</div>
		);
	}
}

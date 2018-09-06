import React, { Component } from 'react';
import PostImage from './PostImage';
import PostInfo from './PostInfo';

export default class PostComments extends Component {
	render() {
		return (
			<div className="post_header">
				<PostImage />
				<PostInfo id={this.props.id} userId={this.props.userId} />
			</div>
		);
	}
}

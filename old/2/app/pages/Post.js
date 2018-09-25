import React from 'react';

import PostMain from '../components/blog/PostMain';

export default class Post extends React.Component {
	render() {
		return <PostMain postId={this.props.params.postId} />;
	}
}

import React, { Component } from 'react';
import BlogItemText from '../components/Blog/Blog/Post/BlogItem';

import { connect } from 'react-redux';
import { fetchBlogs } from '../actions/BlogActions';

class BlogItem extends Component {
	constructor() {
		super(...arguments);
		let posts = fetchBlogs();
		this.props.dispatch(posts);

		this.state = {
			post: this.props[this.props.params.id],
		};
	}

	render() {
		return (
			<div>{this.state.post && <BlogItemText {...this.state.post} />}</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		posts: store.posts.posts,
		is_fetching: store.posts.is_fetching,
	};
}

export default connect(mapStateToProps)(BlogItem);
